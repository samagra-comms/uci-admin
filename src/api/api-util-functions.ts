import moment from "moment";
import { createBot } from "./createBot";
import { useStore } from "../store";
import { createSegment } from "./createSegment";
import { startConversation } from "./startConversation";
import { addLogic } from "./addLogic";
import { toast } from "react-hot-toast";
import { history } from "../utils/history";
import { updateBot } from "./updateBot";
import { mapToSegment } from "./segment-mapping";

export const onBotCreate = () => {
  const store: any = useStore.getState();
  store.startLoading();

  const reqObj = {
    ...store?.state,
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
  };
  store?.userSegments.forEach((userSegment) => {
    reqObj.users.push(userSegment.id);
  });
  store?.conversationLogic.forEach((logic) => {
    reqObj.logic.push(logic.id);
  });
  if (reqObj.startDate) {
    reqObj.startDate = moment(reqObj.startDate).format("YYYY-MM-DD");
  }
  if (reqObj.endDate) {
    reqObj.endDate = moment(reqObj.endDate).format("YYYY-MM-DD");
  }
  // if (isNavigateToEnd) {
  //   reqObj.name += " Broadcast";
  //   reqObj.startingMessage += " Broadcast";
  // }

  store?.startLoading();
  var formdata = new FormData();
  //@ts-ignore
  formdata.append("botImage", store?.botIcon, store?.botIcon?.name);
  formdata.append("data", JSON.stringify({ data: reqObj }));

  createBot(formdata)
    .then((res) => {
      store?.setConversationBot({
        ...res.data.result,
        text: store?.state?.startingMessage,
        botId: res.data.result.id,
      });
      onMappingBotToSegment({
        queryParams: {
          text: reqObj.startingMessage,
          botId: res.data.result.id,
        }
      }).then((res) => {
          if(store?.isBroadcastBot){
            onSegmentCreate()
          }
          else {
            store?.stopLoading();
            store.onReset();
            history.navigate("/success");
          }
        })
        .catch((err) => {
          toast.error(err?.message);
          store.stopLoading();
        });
    })
    .catch((err) => {
      store?.stopLoading();
      toast.error(err?.response?.data?.message || err?.message);
    });
};

export const onSegmentCreate = () => {
  const store: any = useStore.getState();
  console.log({perPage:store?.cadencePerPage})
  const segData = {
    name: store?.state.name,
    all: {
      type: "get",
      config: {
        url: `${process.env.REACT_APP_user_segment_url}/segments/${store?.state.segmentId}/mentors?deepLink=nipunlakshya://chatbot?botId=${store?.conversationBot?.id}`,
        type: "GET",
        cadence: {
          perPage: store?.cadencePerPage || 100,
          retries: 5,
          timeout: 60,
          concurrent: true,
          pagination: true,
          concurrency: 10,
          "retries-interval": 10,
        },
        pageParam: "page",
        credentials: {},
        totalRecords: store?.segmentCount,
      },
    },
    byID: {},
    byPhone: {},
  };
  segData.byID = segData.all;
  segData.byPhone = segData.all;
  createSegment(segData)
    .then((res) => {
      store?.setUserSegments([...store?.userSegments, res.data]);
      onCreateBroadcastBotLogic();
    })
    .catch((err) => {
      store?.stopLoading();
      toast.error(`Error occured in creating segment: ${err.message}`);
    });
};

export const afterBroadcastBotLogic = () => {
  const store: any = useStore.getState();
  if (store?.conversationLogic.length <= store?.broadcastBotLogics.length) {
    store?.setConversationLogic(store?.broadcastBotLogics);
    onBotCreate();
  }
};

export const onStartConversation = (bot) => {
  const store: any = useStore.getState();
  toast.success('Notification Triggered');
  startConversation(bot)
    // .then((res) => {
    //   store.stopLoading();
    //   store.onReset();
    //   history.navigate("/success");
    //   // console.log("debug:12")
    //   // if (store?.isBroadcastBot) {
    //   //   console.log("debug:13")
    //   //   if (isNavigateToEnd) {
    //   //     console.log("debug:14")
    //   //     onAfterBotSubmit({
    //   //       queryParams: { text: store?.state?.startingMessage, botId: bot.id },
    //   //     });
    //   //   } else {
    //   //     console.log("debug:15")
    //   //     onSegmentCreate();
    //   //   }
    //   // } else {
    //   //   console.log("debug:16")
    //   //   store.onReset();
    //   //   history.navigate("/success");
    //   // }
    // })
    .catch((err) => {
      store?.stopLoading();
      toast.error(`Error Occured in Starting bot: ${err.message}`);
    });
    store.stopLoading();
      store.onReset();
      history.navigate("/success");
};

export const onAfterBotSubmit = (extras) => {
  const store: any = useStore.getState();
  const mappingData = {
    segmentId: parseInt(store?.state?.segmentId, 10),
    botId: store.conversationBot.botId,
  };

  mapToSegment(mappingData)
    .then((res) => {
      store.stopLoading();
      store.onReset();
      history.navigate("/success");
    })
    .catch((err) => {
      toast.error(err?.message);
      store.stopLoading();
    });
};

export const onMappingBotToSegment = (extras) => {
  const store: any = useStore.getState();
  const mappingData = {
    segmentId: parseInt(store?.state?.segmentId, 10),
    botId: store.conversationBot.botId,
  };
 return mapToSegment(mappingData)
    
};

export const onCreateBroadcastBotLogic = () => {
  const store: any = useStore.getState();
  console.log({ store });
  console.log({state:store.state})
  for (const botLogic of store?.conversationLogic) {
    console.log({ botLogic });
    const newBotLogic = {
      ...botLogic,
      adapter: process.env.REACT_APP_broadcastAdapterId,
      transformers: [
        {
          id: "774cd134-6657-4688-85f6-6338e2323dde",
          meta: {
            type: "broadcast",
            data: { botId: store?.conversationBot.id },
            title: store?.conversationLogic?.[0]?.name,
            body:
              store?.conversationLogic?.[0]?.description ||
              store?.state?.description ||
              "",
            formID: localStorage.getItem("formID"),
            form: "https://hosted.my.form.here.com/",
            serviceClass: "SurveyService",
            hiddenFields: [
              {
                name: "mobilePhone",
                path: "mobilePhone",
                type: "param",
                config: {
                  dataObjName: "user",
                },
              },
            ],
            templateType: "JS_TEMPLATE_LITERALS",
          },
          
        },
      ],

      
    };
    // eslint-disable-next-line no-loop-func
    addLogic({ data: newBotLogic })
      .then((res) => {
        const existingLogic = botLogic;
        delete existingLogic.id;
        store?.setBroadcastBotLogics([
          ...store?.broadcastBotLogics,
          { id: res.data.result.id, ...existingLogic },
        ]);

        setTimeout(() => {
          const _store: any = useStore.getState();
          if (
            _store?.conversationLogic.length <=
            _store?.broadcastBotLogics.length
          ) {
            _store?.setConversationLogic(_store?.broadcastBotLogics);
            setTimeout(() => {
              onBroadcastBotCreate();
            }, 10);
          }
        }, 20);
      })
      .catch((err) => {
        toast.error(
          `Error occured in creating broadcast bot logic: ${err.message}`
        );
        store?.stopLoading();
      });
  }
};


export const onBroadcastBotCreate=()=>{
  const store: any = useStore.getState();
  store.startLoading();

  const reqObj = {
    ...store?.state,
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
  };
  store?.userSegments.forEach((userSegment) => {
    reqObj.users.push(userSegment.id);
  });
  store?.conversationLogic.forEach((logic) => {
    reqObj.logic.push(logic.id);
  });
  if (reqObj.startDate) {
    reqObj.startDate = moment(reqObj.startDate).format("YYYY-MM-DD");
  }
  if (reqObj.endDate) {
    reqObj.endDate = moment(reqObj.endDate).format("YYYY-MM-DD");
  }
 
    reqObj.name += " Broadcast";
    reqObj.startingMessage += " Broadcast";


  // store?.startLoading();
  var formdata = new FormData();
  //@ts-ignore
  formdata.append("botImage", store?.botIcon, store?.botIcon?.name);
  formdata.append("data", JSON.stringify({ data: reqObj }));

  createBot(formdata)
    .then((res) => {
      onStartConversation(res?.data?.result);
    })
    .catch((err) => {
      store?.stopLoading();
      toast.error(err?.response?.data?.message || err?.message);
    });
}


export const onBotUpdate = () => {
  const store: any = useStore.getState();
  store?.startLoading();

  const reqObj = {
    ...store?.state,
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
  };
  store?.userSegments.forEach((userSegment) => {
    reqObj.users.push(userSegment.id);
  });
  store?.conversationLogic.forEach((logic) => {
    reqObj.logic.push(logic.id);
  });
  if (reqObj.startDate) {
    reqObj.startDate = moment(reqObj.startDate).format("YYYY-MM-DD");
  }
  if (reqObj.endDate) {
    reqObj.endDate = moment(reqObj.endDate).format("YYYY-MM-DD");
  }

  store?.startLoading();
  updateBot(reqObj)
    .then((res) => {
      store?.stopLoading();
    })
    .catch((err) => {
      store?.stopLoading();
      console.log({ err });
    });
};

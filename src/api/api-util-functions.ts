import moment from "moment";
import { createBot } from "./createBot";
import { useStore } from "../store";
import { createSegment } from "./createSegment";
import { startConversation } from "./startConversation";
import { addLogic } from "./addLogic";
import { toast } from "react-hot-toast";
import { mapToSegment } from "./segment-mapping";
import { history } from "../utils/history";

export const onBotCreate = (isTriggerBot = false, isNavigateToEnd = false) => {
  console.log("util: onBotCreate", { isTriggerBot, isNavigateToEnd });

  const store: any = useStore.getState();

  const userSegments = [];
  const reqObj = {
    ...store?.state,
    isBroadcastBotEnabled: store?.isBroadcastBot,
    users: [],
    logic: [],
  };
  userSegments.forEach((userSegment) => {
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
  if (isNavigateToEnd) {
    reqObj.name += " Broadcast";
    reqObj.startingMessage += " Broadcast";
  }

  store?.startLoading();
  var formdata = new FormData();
  //@ts-ignore
  formdata.append("botImage", store?.botIcon, store?.botIcon?.name);
  formdata.append("data", JSON.stringify({ data: reqObj }));

  createBot(formdata)
    .then((res) => {
      store?.stopLoading();
      console.log("botCreate", { res });
      if (!isNavigateToEnd) {
        store?.setConversationBot({
          ...res.data.result,
          text: store?.state?.startingMessage,
          botId: res.data.result.id,
        });
      }
      if (isTriggerBot) {
        onStartConversation(res?.data?.result, isNavigateToEnd);
      } else {
        // this.closeVerifyModal();

        if (store?.isBroadcastBot) {
          console.log("util: isBroadcastBot");
          if (isNavigateToEnd) {
            console.log("util: isNavigateToEnd");
            onAfterBotSubmit({
              queryParams: {
                text: reqObj.startingMessage,
                botId: res.data.result.id,
              },
            });
          } else {
            console.log("util: else onSegmentCreate");
            onSegmentCreate();
          }
        } else {
          store.onReset();
          history.navigate("/success");
          //  this.router.navigate(['uci-admin/success'], {queryParams: {text: reqObj.startingMessage, botId: data.id}});
        }
      }
    })
    .catch((err) => {
      store?.stopLoading();
      toast.error(err?.response?.data?.message || err?.message);
      console.log({ err });
    });
};

export const onSegmentCreate = () => {
  const store: any = useStore.getState();
  const segData = {
    name: store?.state.name,
    all: {
      type: "get",
      config: {
        url: `${process.env.REACT_APP_user_segment_url}/segments/${store?.state.segmentId}/mentors?deepLink=nipunlakshya://chatbot?botId=${store?.conversationBot?.id}`,
        type: "GET",
        cadence: {
          perPage: 100,
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
      console.log("util: createSegment");
      console.log("segmentCreate", { res });
      store?.setUserSegments([...store?.userSegments, res.data]);
      onCreateBroadcastBotLogic();
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const afterBroadcastBotLogic = () => {
  const store: any = useStore.getState();
  if (store?.conversationLogic.length <= store?.broadcastBotLogics.length) {
    store?.setConversationLogic(store?.broadcastBotLogics);
    console.log("util:afterBroadcastBotLogic");
    onBotCreate(true, true);
  }
};
//const onBotCreate =useCallback((isTriggerBot = false,isNavigateToEnd=false,ev:any) => {
//@ts-ignore

export const onStartConversation = (bot, isNavigateToEnd = false) => {
  const store: any = useStore.getState();
  startConversation(bot)
    .then((res) => {
      console.log("startConversation:", { res });
      if (store?.isBroadcastBot) {
        if (isNavigateToEnd) {
          onAfterBotSubmit({
            queryParams: { text: store?.state?.startingMessage, botId: bot.id },
          });
        } else {
          onSegmentCreate();
        }
      } else {
        store.onReset();
        history.navigate("/success");
        // this.router.navigate(["uci-admin/success"]);
      }
    })
    .catch((err) => {
      toast.error(`Error Occured in Starting bot: ${err.message}`);
    });
};

export const onAfterBotSubmit = (extras) => {
  const store: any = useStore.getState();
  console.log("util: onAfter");
  const mappingData = {
    segmentId: parseInt(store?.state?.segmentId, 10),
    botId: store?.conversationBot?.botId,
  };

  mapToSegment(mappingData).then((data) => {
    console.log("util: mapToSegment resp:", { data });
    alert("success after botSubmit");
    store.onReset();
    history.navigate("/success");
  });
};

export const onCreateBroadcastBotLogic = () => {
  console.log("util: onCreateBroadcastBotLogic");
  const store: any = useStore.getState();
  for (const botLogic of store?.conversationLogic) {
    const newBotLogic = {
      ...botLogic,
      adapter: process.env.REACT_APP_broadcastAdapterId,
      transformers: [
        {
          meta: {
            type: "broadcast",
            data: { botId: store?.conversationBot.id },
          },
        },
      ],
    };
    // eslint-disable-next-line no-loop-func
    addLogic({ data: newBotLogic })
      .then((res) => {
        console.log("util: onCreateBroadcastBotLogic addLogic");
        console.log("onCreateBroadcastBotLogic", { res });
        store?.stopLoading();
        const existingLogic = botLogic;
        delete existingLogic.id;
        store?.setBroadcastBotLogics([
          ...store?.broadcastBotLogics,
          { id: res.data.result.id, ...existingLogic },
        ]);
        console.log("util:", { store });
        setTimeout(() => {
          console.log("util broadLogic length:", {
            conv: store?.conversationLogic,
            broad: store?.broadcastBotLogics,
          });
          const tmp: any = useStore.getState();
          console.log("util:", { tmp });
          if (tmp?.conversationLogic.length <= tmp?.broadcastBotLogics.length) {
            console.log("util: conversationLogic:", {
              conversationLogic: store?.conversationLogic,
              broadcast: store?.broadcastBotLogics,
            });
            tmp?.setConversationLogic(tmp?.broadcastBotLogics);
            console.log(
              "util: onCreateBroadcastBotLogic convLogic < broadcast"
            );
            setTimeout(() => {
              onBotCreate(true, true);
            }, 10);
          }
        }, 20);
      })
      .catch((err) => {
        console.log({ err });
      });
  }
};

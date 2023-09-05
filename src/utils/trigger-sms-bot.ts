import moment from "moment";
import { useStore } from "../store";
import { createBot } from "../api/createBot";
import { onMappingBotToSegment, onSegmentCreate } from "../api/api-util-functions";
import { history } from "./history";
import { toast } from "react-hot-toast";

export const onSmsBotCreate =()=>{
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
      if (store?.isBroadcastBot) {
        onMappingBotToSegment({
          queryParams: {
            text: reqObj.startingMessage,
            botId: res.data.result.id,
          },
        })
          .then((res) => {
            if (store?.isBroadcastBot) {
              onSegmentCreate();
            } else {
              store?.stopLoading();
              store.onReset();
              history.navigate("/success");
            }
          })
          .catch((err) => {
            toast.error(err?.message);
            store.stopLoading();
          });
      }
    })
    .catch((err) => {
      store?.stopLoading();
      toast.error(err?.response?.data?.message || err?.message);
    });
}
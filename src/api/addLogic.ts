import axios from "axios";
import { addLogicUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const addLogic = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: 'conversationLogic'
    },
  };

  return axios.post(addLogicUrl, data, config);
};

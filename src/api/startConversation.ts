import axios from "axios";
import { getStartConversationUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const startConversation = (data: any) => {

  const url = getStartConversationUrl(data.id);
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
  };  
  return axios.get(url, config);
};



import axios from "axios";
import { getStartConversationUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const startConversation = (data: any) => {
  console.log("util: startConv:",{data});
  const url = getStartConversationUrl(data.id);
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
  };
  console.log("util_url:",{url})
  
  return axios.get(url, config);
};



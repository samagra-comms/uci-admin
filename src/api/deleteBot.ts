import axios from "axios";
import { createBotUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const deleteBot = (data: any) => {
  const url = createBotUrl + "/" + data.botId;
  const headers = {
    ...getDefaultHeaders(),
    asset: "bot",
  };
  return axios.delete(url, {
    headers: headers,
  });
};

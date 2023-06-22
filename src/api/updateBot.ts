import axios from "axios";
import { getUpdateBotUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const updateBot = (data: any) => {
  const url = getUpdateBotUrl(data?.id);
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
  };

  return axios.patch(url, data, config);
};

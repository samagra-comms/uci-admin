import axios from "axios";
import { createBotUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const createBot = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      "Content-type": "multipart/form-data",
      asset:'bot'
    },
  };

  return axios.post(createBotUrl, data, config);
};

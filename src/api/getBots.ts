import axios from "axios";
import { searchBot } from "./urls";
import { getDefaultHeaders } from "./utils";

export const getBots = (data: any) => {
  const url = searchBot;
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
    params: { perPage: data.perPage, page: data.page },
  };

  return axios.get(url, config);
};



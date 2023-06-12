import axios from "axios";
import { searchBot } from "./urls";
import { getDefaultHeaders } from "./utils";

export const checkDuplicateName = (data: any) => {
  const url = searchBot;
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
    params: data.name ?  { name: data.name, match: true }:{startingMessage:data.startingMessage, match: true },
  };


  return axios.get(url, config);
};



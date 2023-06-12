import axios from "axios";
import { getBotByIdUrl, searchBot } from "./urls";
import { getDefaultHeaders } from "./utils";

export const getBotById = (id: string) => {
  const url = getBotByIdUrl(id);
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    }
  };

  return axios.get(url, config);
};



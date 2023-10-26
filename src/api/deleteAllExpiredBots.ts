import axios from "axios";
import { createBotUrl } from "./urls";
import { getDefaultHeaders } from "./utils";
import moment from "moment";

export const deleteAllExpiredBots = () => {
  const url = createBotUrl ;
  const headers = {
    ...getDefaultHeaders(),
    asset: "bot",
  };
  return axios.delete(url, {
    headers: headers,
    data :{endDate:moment().format('YYYY-MM-DD')}
  });
};

import axios from "axios";
import { downloadLog } from "./urls";
import { getDefaultHeaders } from "./utils";

export const downloadLogData = (
  service_name: string,
  date:string
) => {
  const url = downloadLog(service_name,date);
  const config = {
    headers: {
      ...getDefaultHeaders()
    },
  };

  return axios.get(url, config);
};

import axios from "axios";
import { downloadErrLog } from "./urls";
import { getDefaultHeaders } from "./utils";

export const downloadErrLogData = (
  service_name: string,
  date:string
) => {
  const url = downloadErrLog(service_name,date);
  const config = {
    headers: {
      ...getDefaultHeaders()
    },
  };

  return axios.get(url, config);
};

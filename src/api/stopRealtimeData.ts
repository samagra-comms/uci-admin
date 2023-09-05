import axios from "axios";
import { stopRealtimeData } from "./urls";
import { getDefaultHeaders } from "./utils";

export const stopRealtime = () => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
    },
  };

  return axios.post(stopRealtimeData,'', config);
};

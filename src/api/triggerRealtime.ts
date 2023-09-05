import axios from "axios";
import { triggerRealtimeData } from "./urls";
import { getDefaultHeaders } from "./utils";

export const triggerRealtimeDataRes = () => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
    },
  };
  return axios.post(triggerRealtimeData, "", config);
};

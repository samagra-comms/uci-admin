import axios from "axios";
import { fetchRealtimeData } from "./urls";
import { getDefaultHeaders } from "./utils";

export const fetchRealtime = (
  file: string
) => {
  const url = fetchRealtimeData(file);
  const config = {
    headers: {
      ...getDefaultHeaders()
    },
  };

  return axios.get(url, config);
};

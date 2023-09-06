import axios from "axios";
import { fetchService } from "./urls";
import { getDefaultHeaders } from "./utils";

export const fetchServiceData = (
  service_name: string,
  lines: number,
  date: string
) => {
  const url = fetchService(service_name, lines, date);
  const config = {
    headers: {
      ...getDefaultHeaders()
    },
  };

  return axios.get(url, config);
};

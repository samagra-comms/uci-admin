import axios from "axios";
import { fetchOverview } from "./urls";
import { getDefaultHeaders } from "./utils";

export const fetchOverviewData = (
  file: string
) => {
  const url = fetchOverview(file);
  const config = {
    headers: {
      ...getDefaultHeaders()
    },
  };

  return axios.get(url, config);
};

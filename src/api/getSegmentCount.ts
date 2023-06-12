

import axios from "axios";
import { getSegmentCountUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const getSegmentCount = (segment: string | number) => {
  const url = getSegmentCountUrl(segment);
  const config = {
    headers: {
      ...getDefaultHeaders(),
    }
  };

  return axios.get(url, config);
};



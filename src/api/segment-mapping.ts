


import axios from "axios";
import { segmentMappingUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const mapToSegment = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
    },
  };

  return axios.post(segmentMappingUrl, data, config);
};

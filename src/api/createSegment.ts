import axios from "axios";
import { createSegmentUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const createSegment = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset:'userSegment'
    },
  };

 

  return axios.post(createSegmentUrl, data, config);
};

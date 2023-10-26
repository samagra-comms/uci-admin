import axios from "axios";
import { segmentMappingUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const removeBotsFromNl = (ids: string[]) => {
  const url = `${segmentMappingUrl}?bot_ids=${ids.join()}`;
  const headers = {
    ...getDefaultHeaders(),
  };

  return axios.delete(url, {
    headers,
  });
};

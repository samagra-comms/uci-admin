import axios from "axios";
import { getFiles } from "./urls";
import { getDefaultHeaders } from "./utils";

export const getFilesData = () => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
    },
  };
  return axios.get(getFiles, config);
};

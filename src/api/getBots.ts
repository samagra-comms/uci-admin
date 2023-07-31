import axios from "axios";
import { searchBot } from "./urls";
import { getDefaultHeaders } from "./utils";
import {omitBy,isNull} from 'lodash';

export const getBots = (data: any) => {
  const url = searchBot;
  const config = {
    headers: {
      ...getDefaultHeaders(),
      asset: "bot",
    },
    params: omitBy(
      {
        perPage: data.perPage,
        page: data.page,
        name: data.name,
        sortBy: data.sortBy,
        orderBy: data.orderBy,
      },
      isNull
    ),
  };

  return axios.get(url, config);
};



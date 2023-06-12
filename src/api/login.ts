import axios from "axios";
import { loginUrl } from "./urls";
import { LoginPayload } from "../types";

export const login = (data: LoginPayload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: process.env.REACT_APP_nl_login_token,
      Authorization: process.env.REACT_APP_nl_login_token,
    },
  };

  const payload = {
    ...data,
    applicationId: process.env.REACT_APP_nl_application_id,
  };
  return axios.post(loginUrl, payload, config);
};

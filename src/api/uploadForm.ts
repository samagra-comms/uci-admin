import axios from "axios";
import { odkUploadUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const uploadForm = (data: any) => {
  const config = {
    headers: {
      ...getDefaultHeaders(),
      "Content-type": "multipart/form-data",
    },
  };

  const formData = new FormData();
  formData.append("form", data.form, `${data.form.name}`);
 
  for (var i = 0; i < data.media.length; i++) {
    formData.append(
      'mediaFiles',
    data?.media?.[i],
    data?.media?.[i].name
    );
  }
  return axios.post(odkUploadUrl, formData, config);
};

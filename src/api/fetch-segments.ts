import axios from "axios";
import { addLogicUrl } from "./urls";
import { getDefaultHeaders } from "./utils";

export const fetchSegments = () => {
  //   const config = {
  //     headers: {
  //       ...getDefaultHeaders(),
  //       asset: 'conversationLogic'
  //     },
  //   };

  //   return axios.post(addLogicUrl, data, config);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            name: "All teachers",
            description: "Segment for internal engineering testing",
            created_at: "2023-03-03T15:10:01.711001+05:30",
            updated_at: "2023-03-03T15:10:01.711001+05:30",
          },
          {
            id: 2,
            name: "All mentors",
            description: "Segment for internal engineering testing",
            created_at: "2023-03-03T15:10:01.711001+05:30",
            updated_at: "2023-03-03T15:10:01.711001+05:30",
          },
        ],
      });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  });
};

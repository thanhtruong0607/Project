import axios from "axios";
import { HOST, USER_KEY } from "../utils/config";

class Service {
  post = async (params, sub_url = HOST.COMMON) => {
    try {
      let url = `${HOST.MAIN}${sub_url}`;
      let result = await axios.post(
        url,
        { params },
        { headers: { HTTP_API_KEY: USER_KEY.KEY } }
      );

      if (result.status === 200) {
        if (result.data.error) {
          return {
            status: "FAILED",
            data: result.data.error,
          };
        } else {
          return {
            status: "SUCCESS",
            data: result.data,
          };
        }
      } else {
        console.log(`Error: `, result);
        return {
          status: "FAILED",
          data: {
            message: "Error when call API",
          },
        };
      }
    } catch (error) {
      console.log(`Error: `, error);
      return {
        status: "FAILED",
        data: {
          message: "Error when call API",
        },
      };
    }
  };
}

const service = new Service();

export default service;

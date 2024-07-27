import { AxiosResponse } from "axios";

const RequestMethod = {
  GET: "GET"
};

const get = async (
  url: string
): Promise<{ response: AxiosResponse; statusCode: number }> => {
  return makeGetCall(RequestMethod.GET, url);
};

const makeGetCall = async (
  requestMethod: string,
  url: string
): Promise<{ response: AxiosResponse; statusCode: number }> => {

  const options: any = {
    method: requestMethod,
    headers: {
      "Content-Type": "application/json",
      mode: "cors"
    },
  };
  return fetch(`${url}`, options).then(async (response) => {
    const statusCode = response.status;
    return new Promise<{ response: AxiosResponse; statusCode: number }>(
      (resolve, reject) => {
        response
          .json()
          .then((response: any) => {
            resolve({ response, statusCode });
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
};

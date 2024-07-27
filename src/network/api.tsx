// "Use Strict";

// import { convertToTimestamp } from "../utils/formatter";
// import BaseApiService from "./base-service";
// import { APIRequests, BaseURL } from "./constant";

// function getAllData() {
//   return BaseApiService.get(
//     BaseURL
//   );
// }

// function getFilteredData(date: any, type: any, search: any, loc: any) {

//   let url = BaseURL;
//   const queryParams: string[] = [];
//   if (type !== '') {
//     queryParams.push(`type=${encodeURIComponent(type)}`);
//   }
//   if (search !== '') {
//     queryParams.push(`search=${encodeURIComponent(search)}`);
//   }
//   if (loc !== '') {
//     queryParams.push(`location=${encodeURIComponent(loc)}`);
//   }
//   if (queryParams.length > 0) {
//     url += `?${queryParams.join('&')}`;
//   }
//   return BaseApiService.get(url);
// }

// export const api = {
//   getAllData,
//   getFilteredData,
// };



import { convertToTimestamp } from "../utils/formatter";
import BaseApiService from "./base-service";
import { APIRequests, BaseURL } from "./constant";

function getAllData() {
  return BaseApiService.get(`${BaseURL}`);
}

function getFilteredData(date: any, type: any, search: any, loc: any, page: number = 1, limit: number = 5) {
  let url = `${BaseURL}?page=${page}&limit=${limit}`;
  const queryParams: string[] = [];

  if (date) {
    // Assuming date is in ISO format and you need to convert it to a timestamp
    const timestamp = convertToTimestamp(date);
    queryParams.push(`date=${timestamp}`);
  }
  if (type !== '') {
    queryParams.push(`type=${encodeURIComponent(type)}`);
  }
  if (search !== '') {
    queryParams.push(`search=${encodeURIComponent(search)}`);
  }
  if (loc !== '') {
    queryParams.push(`location=${encodeURIComponent(loc)}`);
  }
  if (queryParams.length > 0) {
    url += `&${queryParams.join('&')}`;
  }

  return BaseApiService.get(url);
}

export const api = {
  getAllData,
  getFilteredData,
};

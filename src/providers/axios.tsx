import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
export interface CustomHeaders {
  headers: {
    Accept: string;
    "Accept-Language": string;
    "Client-Secret": string;
    Authorization: string;
  };
}
const config: CustomHeaders = {
  headers: {
    Accept: "application/json",
    "Accept-Language": `English`,
    "Client-Secret": "#da565rah4HHJ5$%gtwe22134gKLMno123",
    Authorization: `Bearer ${
      localStorage.getItem("token") || sessionStorage.getItem("token")
    }`,
  },
};
// create instance from axios
let productsClient = axios.create({ baseURL });
export { productsClient, baseURL, config };

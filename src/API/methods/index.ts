import { AxiosRequestConfig, AxiosResponse } from "axios";
import clients from "../client";

const { api } = clients;

interface ApiMethods {
  post: (
    url: string,
    body: Record<string, unknown>
  ) => Promise<AxiosResponse<unknown>>;
  get: (
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<unknown>>;
  put: (
    url: string,
    body: Record<string, unknown>
  ) => Promise<AxiosResponse<unknown>>;
  delete: (url: string) => Promise<AxiosResponse<unknown>>;
  patch: (
    url: string,
    body: Record<string, unknown>
  ) => Promise<AxiosResponse<unknown>>;
}

const apiMethods: ApiMethods = {
  post: (url, body) => {
    return api.post(url, body);
  },

  get: (url, config) => {
    return api.get(url, config);
  },

  put: (url, body) => {
    return api.put(url, body);
  },

  delete: (url) => {
    return api.delete(url);
  },

  patch: (url, body) => {
    return api.patch(url, body);
  },
};

export default apiMethods;

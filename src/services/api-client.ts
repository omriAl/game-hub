import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "62956239bb5048d2ac1bee7b7e5665a3",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }

  getOne = (key: any, config: AxiosRequestConfig) => {
    
    return axiosInstance
    .get<T>(`${this.endpoint}/${key as string}`,config)
    .then(res => res.data) ;
  }
}

export default APIClient;
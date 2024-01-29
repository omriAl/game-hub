import axios, {AxiosRequestConfig} from "axios";
export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
const axiosClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "62956239bb5048d2ac1bee7b7e5665a3"
    }
})


class APIClient<T> {
    endpoint: string ;

    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = (queryConfig:AxiosRequestConfig = {}) => {
        return axiosClient.get<FetchResponse<T>>(this.endpoint,queryConfig)
        .then(res => res.data)
    }
}

export default APIClient 
import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "62956239bb5048d2ac1bee7b7e5665a3"
    }
})
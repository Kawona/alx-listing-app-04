import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://your-api-as-url.com",
    headers: {
        "content-Type": "application/json",
    },
});

export default apiClient;

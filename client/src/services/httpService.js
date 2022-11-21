import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8000",
});

const httpService = {
    get: http.get,
    put: http.put,
    post: http.post,
    delete: http.delete,
    patch: http.patch,
};

export default httpService;

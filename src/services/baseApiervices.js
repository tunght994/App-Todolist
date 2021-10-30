import axios from "axios";
import { DOMAIN } from "./../utils/settings/index";
import { TOKEN, TOKEN_CYBERSOFT } from "./../utils/settings/index";

const api = axios.create({
    baseURL: DOMAIN,
});

api.interceptors.request.use(
    function (config) {
        const toKenUser = "Bearer " + localStorage.getItem(TOKEN);

        config.headers = {
            ...config.headers,
            TokenCybersoft: TOKEN_CYBERSOFT,
            Authorization: toKenUser,
        };
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
export { api };

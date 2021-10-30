import { api } from "./baseApiervices";
class UserServices {
    servicesLogin(infoLogin) {
        return api.post("/api/Users/signin", infoLogin);
    }
}

export const userServices = new UserServices();

import { api } from "./baseApiervices";

class ProjectServices {
    getProjectDetailByIdServices(id) {
        return api.get(`/api/Project/getProjectDetail?id=${id}`);
    }
}

export const projectServices = new ProjectServices();

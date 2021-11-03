import { api } from "./baseApiervices";

class ProjectServices {
    getProjectDetailByIdServices(id) {
        return api.get(`/api/Project/getProjectDetail?id=${id}`);
    }

    updateStatusServices(info) {
        return api.put("/api/Project/updateStatus", info);
    }
}

export const projectServices = new ProjectServices();

import { api } from "./baseApiervices";

class DefaultValueServices {
    getPriorityServices() {
        return api.get("/api/Priority/getAll?id=0");
    }

    getProjectCategoryServices() {
        return api.get("/api/ProjectCategory");
    }

    getStatusServices() {
        return api.get("/api/Status/getAll");
    }

    getTaskTypeServices() {
        return api.get("/api/TaskType/getAll");
    }
}

export const defaultValueServices = new DefaultValueServices();

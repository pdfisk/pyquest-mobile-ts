import { ServerConstants } from "../../constants/ServerConstants";
import { AbstractStore } from "./AbstractStore";

export class ProjectsStore extends AbstractStore {

    static instance: ProjectsStore;

    static getInstance() {
        if (!this.instance)
            this.instance = new ProjectsStore();
        return this.instance;
    }

    private constructor() {
        super();
    }

    getDataRecords(): any[] {
        const model = this.dataStore.$$user_model;
        const projectsData: any[] = [];
        for (let i = 0; i < model.length; i++) {
            const item = model.getItem(i);
            const id = item.$$user_id;
            const name = item.$$user_name;
            const description = item.$$user_description;
            const code = item.$$user_code;
            const code_object_json = item.$$user_code_object;
            let code_object = null;
            if (typeof (code_object_json) === 'string')
                code_object = JSON.parse(code_object_json);
            const projectRecord: any = {};
            projectRecord.id = id;
            projectRecord.name = name;
            projectRecord.description = description;
            projectRecord.code = code;
            projectRecord.code_object = code_object;
            projectsData.push(projectRecord);
        }
        return projectsData;
    }

    getProjectsItem(n: number) {
        return this.dataStore.$$user_model.getItem(n);
    }

    getProjectsSize(): number {
        return this.dataStore.$$user_model.length;
    }
  
    serviceName(): string {
        return ServerConstants.ServiceProjects;
    }

}

import { ServerConstants } from "../../constants/ServerConstants";
import { AbstractStore } from "./AbstractStore";

export class ProjectsStore extends AbstractStore {

    static instance: ProjectsStore;

    static addLoadHandlerFn(fn: Function) {
        this.getInstance().addLoaderHandlerFn(fn);
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new ProjectsStore();
        return this.instance;
    }

    static loadSilently() {
        this.getInstance().loadData(false);
    }

    private constructor() {
        super();
    }

    createNewRecord(): any {
        return { name: '-- new project --', description: '', details: '', author: '', code: '' };
    }

    getDataRecords(): any[] {
        const model = this.dataStore.$$user_model;
        const projectsData: any[] = [];
        for (let i = 0; i < model.length; i++) {
            const item = model.getItem(i);
            const id = item.$$user_id;
            const name = item.$$user_name;
            const description = item.$$user_description;
            const details = item.$$user_details;
            const code = item.$$user_code;
            const code_object_json = item.$$user_code_object;
            const created_at = item.$$user_created_at;
            const updated_at = item.$$user_updated_at;
            let code_object = null;
            if (typeof (code_object_json) === 'string')
                code_object = JSON.parse(code_object_json);
            const projectRecord: any = {};
            projectRecord.id = id;
            projectRecord.name = name;
            projectRecord.description = description;
            projectRecord.details = details;
            projectRecord.code = code;
            projectRecord.code_object = code_object;
            projectRecord.created_at = created_at;
            projectRecord.updated_at = updated_at;
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

    handleLoadedData() {
        super.handleLoadedData();
    }

    serviceName(): string {
        return ServerConstants.ServiceProjects;
    }

}

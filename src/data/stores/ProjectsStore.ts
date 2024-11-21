import { ServerConstants } from "../../constants/ServerConstants";
import { AbstractStore } from "./AbstractStore";

export class ProjectsStore extends AbstractStore {

    static instance: ProjectsStore;

    static addLoadHandlerFn(fn: Function) {
        this.getInstance().addLoaderHandlerFn(fn);
    }

    static deleteRecord(id: number) {
        this.getInstance().deleteRecord(id);
    }

    static getInstance() {
        if (!this.instance)
            this.instance = new ProjectsStore();
        return this.instance;
    }

    static loadSilently() {
        this.getInstance().loadData(false);
    }

    static newRecord(name: string) {
        this.getInstance().newRecord(name);
    }

    private constructor() {
        super();
    }

    createNewRecord(name: string): any {
        return { name: name, description: '', details: '', author: '', code: '' };
    }

    createRecordData(record: any): any {
        const data: any = {};
        data.author = '<unknown>';
        data.description = record.getDescription();
        data.details = record.getDetails();
        data.code = record.getCode();
        data.code_object = JSON.stringify(record.getCode_object());
        data.name = record.getName();
        return data;
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

    getProjectsItem(n: number): any {
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

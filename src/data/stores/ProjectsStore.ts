import { AbstractStore } from "./AbstractStore";

export class ProjectsStore extends AbstractStore {

    constructor() {
        super();
    }

    getProjects() {
        if (!this.dataLoaded)
            return this.loadProjects();
        const model = this.dataStore.$$user_model;
        const projectsData = [];
        for (let i = 0; i < model.length; i++) {
            const item = model.getItem(i);
            const id = item.$$user_id;
            const name = item.$$user_name;
            const description = item.$$user_description;
            const code = item.$$user_code;
            // const code_object_json = item.$$user_code_object;
            let code_object = null;
            // if (typeof (code_object_json) === 'string') {
            //     const temp = app.api.VmApi.cacheCodeObject(code_object_json);
            //     if (temp)
            //         code_object = temp;
            // }
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

    loadProjects() {
        const fn = () => { console.log('LOAD FN', arguments) };
        this.server.sendGetRequest(this.getUrl('projects'), fn);
    }

}

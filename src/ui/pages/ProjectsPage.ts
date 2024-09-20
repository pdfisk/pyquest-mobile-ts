import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { DataListPage } from "./DataListPage";

export class ProjectsPage extends DataListPage {
    static instance: ProjectsPage;

    static getInstance(): ProjectsPage {
        if (!this.instance)
            this.instance = new ProjectsPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageProjects);
    }

    addLoadHandlerFns(): void {
        const handlerFn = (dataRecords: any[]) => {
            console.log('HANDLE', dataRecords);
        }
        this.dataStore.addLoaderHandlerFn(handlerFn);
    }

    getListConfig(): any {
        return {
            configureItem(item: any, data: any) {
                item.setTitle(data.getName());
                item.setSubtitle(data.getUpdated_at());
            },
        };
    }

    getStore(): AbstractStore {
        return ProjectsStore.getInstance();
    }

}

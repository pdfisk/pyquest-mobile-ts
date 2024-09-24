import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { AbsoluteDataListPage } from "./AbsoluteDataListPage";
import { EditorPage } from "./EditorPage";

export class ProjectsPage extends AbsoluteDataListPage {
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

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelRefresh];
    }

    getOnChangeFn(): Function {
        return (evt: any) => {
            const index: number = evt.getData();
            const record = this.list.getItem(index);
            const code = record.getCode();
            EditorPage.setCode(code);
            this.showEditor();
        };
    }

    getListConfig(): any {
        return {
            configureItem(item: any, data: any) {
                item.setTitle(data.getName());
                item.setSubtitle(data.getUpdated_at());
            },
        };
    }

    getListKey(data: any): string {
        return data.name;
    }

    getStore(): AbstractStore {
        return ProjectsStore.getInstance();
    }

    onRefresh() {
        this.getStore().reload();
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionRefresh:
                this.onRefresh();
                break;
            default:
                console.log('ProjectsPage onTap', action);
                break;
        }
    }

}

import { LabelConstants } from "../../constants/LabelConstants";
import { ProjectsStore } from "../../data";
import { QxScroll } from "../../qx/mobile/container/QxScroll";
import { QxList } from "../../qx/mobile/list/QxList";
import { DataListPage } from "./DataListPage";

export class ProjectsPage extends DataListPage {
    dataStore: ProjectsStore;
    list: QxList;
    scroll: QxScroll;
    static instance: ProjectsPage;

    static getInstance(): ProjectsPage {
        if (!this.instance)
            this.instance = new ProjectsPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageProjects);
        const config = {
            configureItem(item:any, data:any) {
              item.setTitle(data.getName());
              item.setSubtitle(data.getUpdated_at());
            },
          };
          this.dataStore = ProjectsStore.getInstance();
        this.list = new QxList(config);
        this.scroll = new QxScroll();
        this.initDataStore();
    }

    addContent() {
        this.scroll.add(this.list);
        this.widget.getContent().add(this.scroll.widget);
    }

    initDataStore() {

    }

}

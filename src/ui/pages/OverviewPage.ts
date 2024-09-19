import { LabelConstants } from "../../constants/LabelConstants";
import { QxList } from "../../qx/mobile/list/QxList";
import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export class OverviewPage extends QxNavigationPage {
    list: QxList;
    static instance: OverviewPage;

    static getInstance(): OverviewPage {
        if (!this.instance)
            this.instance = new OverviewPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageOverview);
        this.list = new QxList();
        this.buildList();
    }

    buildList() {
        this.list.setModel(new (window as any).qx.data.Array(this.getData()));
    }

    getData(): any[] {
        return [
            { title: 'Home', subtitle: 'Home', path: 'home', },
            { title: 'Projects', subtitle: 'Python projects', path: 'projects', },
            { title: 'Editor', subtitle: 'Python editor', path: 'editor', },
            { title: 'Transcript', subtitle: 'Text output', path: 'transcript', },
            { title: 'Board', subtitle: 'Game board', path: 'board', },
            { title: 'Status', subtitle: 'Status information', path: 'status' },
        ];
    }

    initialize() {
        super.initialize();
    }

    onAppear() {
        this.widget.getContent().add(this.list.widget);
    }

}

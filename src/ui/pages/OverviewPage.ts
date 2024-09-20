import { EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxScroll } from "../../qx/mobile/container/QxScroll";
import { QxList } from "../../qx/mobile/list/QxList";
import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export class OverviewPage extends QxNavigationPage {
    list: QxList;
    scroll: QxScroll;
    static instance: OverviewPage;

    static getInstance(): OverviewPage {
        if (!this.instance)
            this.instance = new OverviewPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageOverview);
        const config = {
            configureItem(item: any, data: any) {
                item.setTitle(data.title);
                item.setSubtitle(data.subtitle);
                item.setShowArrow(true);
            },
        };
        this.list = new QxList(config);
        this.scroll = new QxScroll();
        this.buildList();
    }

    addContent() {
        this.scroll.add(this.list);
        this.widget.getContent().add(this.scroll.widget);
    }

    buildList() {
        const data = this.getData();
        this.list.setModel(new (window as any).qx.data.Array(data));
        this.list.widget.addListener(
            EventConstants.QxEventChangeSelection,
            function (evt: any) {
                const path = data[evt.getData()].path;
                QxMobileApplication.executeGet('/' + path);
            },
            this
        );
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

    resizeHeight(height: number) {
        console.log('resizeHeight', height);
        (window as any).X = this;
    }

}

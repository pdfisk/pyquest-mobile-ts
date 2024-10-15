import { EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";
import { QxList } from "../../qx/ui/mobile/list/QxList";
import { AbstractRoutingPage } from "./AbstractRoutingPage";

export class OverviewPage extends AbstractRoutingPage {
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
        this.addContentWidget(this.scroll);
    }

    buildList() {
        const data = this.getData();
        this.list.setModel(new (window as any).qx.data.Array(data));
        this.list.addListener(
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
            { title: PageConstants.titleHome, subtitle: PageConstants.subtitleHome, path: PageConstants.pathHome, },
            { title: PageConstants.titleProjects, subtitle: PageConstants.subtitleProjects, path: PageConstants.pathProjects, },
            { title: PageConstants.titleEditor, subtitle: PageConstants.subtitleEditor, path: PageConstants.pathEditor, },
            { title: PageConstants.titleTranscript, subtitle: PageConstants.subtitleTranscript, path: PageConstants.pathTranscript, },
            { title: PageConstants.titleBoard, subtitle: PageConstants.subtitleBoard, path: PageConstants.pathBoard, },
            { title: PageConstants.titleStatus, subtitle: PageConstants.subtitleStatus, path: PageConstants.pathStatus },
        ];
    }

    initialize() {
        super.initialize();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

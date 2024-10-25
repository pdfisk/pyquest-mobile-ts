import { EventConstants, UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";
import { QxList } from "../../qx/ui/mobile/list/QxList";
import { BrowserUtil } from "../../util/BrowserUtil";
import { AbstractPage } from "./AbstractPage";

export class TopMenuPage extends AbstractPage {
    list: QxList;
    scroll: QxScroll;
    static instance: TopMenuPage;

    static getInstance(): TopMenuPage {
        if (!this.instance)
            this.instance = new TopMenuPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageTopMenu);
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
                const path: string = data[evt.getData()].path;
                if (path.startsWith(UrlConstants.https))
                    BrowserUtil.openNewTab(path);
                else
                    QxMobileApplication.executeGet('/' + path);
            },
            this
        );
    }

    getData(): any[] {
        return [
            { title: PageConstants.titleProjects, subtitle: PageConstants.subtitleProjects, path: PageConstants.pathProjects, },
            { title: PageConstants.titleEditor, subtitle: PageConstants.subtitleEditor, path: PageConstants.pathEditor, },
            { title: PageConstants.titleTranscript, subtitle: PageConstants.subtitleTranscript, path: PageConstants.pathTranscript, },
            { title: PageConstants.titleBoard, subtitle: PageConstants.subtitleBoard, path: PageConstants.pathBoard, },
            { title: PageConstants.titleStatus, subtitle: PageConstants.subtitleStatus, path: PageConstants.pathStatus },
            { title: PageConstants.titleLogin, subtitle: PageConstants.subtitleLogin, path: PageConstants.pathLogin },
            { title: PageConstants.titleSupport, subtitle: PageConstants.subtitleForum, path: UrlConstants.pyquest_forum },
        ];
    }

    hasButtonBar(): boolean {
        return false;
    }

    hasTopMenuMenu(): boolean {
        return false;
    }

    initialize() {
        super.initialize();
    }

    isContentReady(): boolean {
        return true;
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

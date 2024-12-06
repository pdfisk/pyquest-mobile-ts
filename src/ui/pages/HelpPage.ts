import { EventConstants, UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";
import { QxList } from "../../qx/ui/mobile/list/QxList";
import { BrowserUtil } from "../../util/BrowserUtil";
import { AbstractPage } from "./abstract/AbstractPage";

export class HelpPage extends AbstractPage {
    list: QxList;
    loginSubtitle: string = PageConstants.subtitleLogin;
    loginTitle: string = PageConstants.titleLogin;
    scroll: QxScroll;
    static instance: HelpPage;

    static getInstance(): HelpPage {
        if (!this.instance)
            this.instance = new HelpPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHelpMenu);
        const config = {
            configureItem(item: any, data: any) {
                item.setTitle(data.title);
                item.setSubtitle(data.subtitle);
                item.setShowArrow(true);
            },
        };
        this.list = new QxList(config);
        this.scroll = new QxScroll();
        const data = this.getData();
        this.buildList(data);
        this.addListListener(data);
    }

    addContent() {
        this.scroll.add(this.list);
        this.addContentWidget(this.scroll);
    }

    addListListener(data: any[]) {
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

    buildList(data: any[]) {
        this.list.setModel(new (window as any).qx.data.Array(data));
    }

    getData(): any[] {
        return [
            { title: PageConstants.titlePythonHelp, subtitle: PageConstants.subtitlePythonHelp, path: PageConstants.pathPythonHelp }
        ];
    }

    hasButtonBar(): boolean {
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

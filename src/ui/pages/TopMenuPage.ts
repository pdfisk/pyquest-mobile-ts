import { EventConstants } from '../../constants/EventConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { PageConstants } from "../../constants/PageConstants";
import { SessionConstants } from '../../constants/SessionConstants';
import { MessageBus } from '../../messages/MessageBus';
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";
import { QxList } from "../../qx/ui/mobile/list/QxList";
import { BrowserUtil } from "../../util/BrowserUtil";
import { UrlConstants } from '../../vm/constants/UrlConstants';
import { AbstractPage } from "./abstract/AbstractPage";

export class TopMenuPage extends AbstractPage {
    list: QxList;
    loginSubtitle: string = PageConstants.subtitleLogin;
    loginTitle: string = PageConstants.titleLogin;
    scroll: QxScroll;
    static instance: TopMenuPage;

    static getInstance(): TopMenuPage {
        if (!this.instance)
            this.instance = new TopMenuPage();
        return this.instance;
    }

    private constructor() {
        super();
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
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
            { title: PageConstants.titleProjects, subtitle: PageConstants.subtitleProjects, path: PageConstants.pathProjects, },
            { title: PageConstants.titleEditor, subtitle: PageConstants.subtitleEditor, path: PageConstants.pathEditor, },
            { title: PageConstants.titleLlm, subtitle: PageConstants.subtitleLlm, path: PageConstants.pathLlm, },
            { title: PageConstants.titleTranscript, subtitle: PageConstants.subtitleTranscript, path: PageConstants.pathTranscript, },
            { title: PageConstants.titleBoard, subtitle: PageConstants.subtitleBoard, path: PageConstants.pathBoard, },
            { title: PageConstants.titleStatus, subtitle: PageConstants.subtitleStatus, path: PageConstants.pathStatus },
            { title: this.loginTitle, subtitle: this.loginSubtitle, path: PageConstants.pathLogin },
            { title: PageConstants.titleHelp, subtitle: PageConstants.subtitleHelp, path: PageConstants.pathHelp },
            // { title: PageConstants.titleSupport, subtitle: PageConstants.subtitleForum, path: UrlConstants.pyquest_forum },
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

    onSessionStatusChanged(message: any) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
            case SessionConstants.SessionLoggedInAsUser:
                this.setLogout();
                break;
            default:
                this.setLogin();
                break;
        }
        this.list.render();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setLogin() {
        this.loginTitle = PageConstants.titleLogin;
        this.loginSubtitle = PageConstants.subtitleLogin;
        this.buildList(this.getData());
    }

    setLogout() {
        this.loginTitle = PageConstants.titleLogout;
        this.loginSubtitle = PageConstants.subtitleLogout;
        this.buildList(this.getData());
    }

}

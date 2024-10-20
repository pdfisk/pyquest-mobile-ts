import { ProjectsStore } from "../../data";
import { SessionStatus } from "../../session";
import { BrowserUtil } from "../../util/BrowserUtil";
import { QxObject } from "../core";
import { QxInit } from "../core/QxInit";

export class QxMobileApplication extends QxObject {

    static instance: QxMobileApplication;

    static back() {
        this.getRouting().back();
    }

    static executeGet(route: string) {
        this.getInstance().executeGet(route);
    }

    static getInstance(): QxMobileApplication {
        if (!this.instance)
            this.instance = new QxMobileApplication();
        return this.instance;
    }

    static getRouting(): any {
        return this.getInstance().getRouting();
    }

    private constructor() {
        super(QxInit.getApplication());
        const appName = BrowserUtil.getAppNameOrNull();
        if (appName) {
            const fn = (records: any[]) => {
                console.log('[', records, ']');
            }
            ProjectsStore.addLoadHandlerFn(fn);
            ProjectsStore.loadSilently();
        }
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
    }

    executeGet(route: string) {
        this.getRouting().executeGet(route);
    }

    getRoot(): any {
        return this.widget.getRoot();
    }

    getRouting(): any {
        return this.widget.getRouting();
    }

}

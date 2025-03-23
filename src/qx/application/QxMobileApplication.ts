import { SessionStatus } from '../../session/SessionStatus';
import { BrowserUtil } from "../../util/BrowserUtil";
import { PyModulesLocalStore } from '../../vm/data/stores/modules/PyModulesLocalStore';
import { DebugUtil } from '../../vm/util/DebugUtil';
import { QxInit } from "../core/QxInit";
import { QxObject } from '../core/QxObject';

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
                DebugUtil.log('[', records, ']');
            }
            PyModulesLocalStore.getInstance().addLoaderHandlerFn(fn);
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

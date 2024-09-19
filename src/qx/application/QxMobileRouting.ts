import { QxObject } from "../core";
import { QxNavigationPage } from "../mobile/page/QxNavigationPage";
import { QxMobileApplication } from "./QxMobileApplication";

export class QxMobileRouting extends QxObject {

    static instance: QxMobileRouting;

    static getInstance(): QxMobileRouting {
        if (!this.instance)
            this.instance = new QxMobileRouting();
        return this.instance;
    }

    private constructor() {
        super(QxMobileApplication.getInstance().getRouting());
    }

    init() {
        this.widget.init();
    }

    onGet(route: string, page: QxNavigationPage) {
        // @ts-ignore
        this.widget.onGet(route, function () { this.show(); }, page);
    }

}

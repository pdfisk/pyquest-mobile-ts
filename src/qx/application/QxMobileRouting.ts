import { QxObject } from "../core";
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

}

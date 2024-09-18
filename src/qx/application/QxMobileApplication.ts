import { SessionStatus } from "../../session";
import { QxObject } from "../core";
import { QxInit } from "../core/QxInit";

export class QxMobileApplication extends QxObject {

    static instance: QxMobileApplication;

    static getInstance(): QxMobileApplication {
        if (!this.instance)
            this.instance = new QxMobileApplication();
        return this.instance;
    }

    private constructor() {
        super(QxInit.getApplication());
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
    }

    getRoot():any {
        return this.widget.getRoot();
    }

    getRouting():any {
        return this.widget.getRouting();
    }

}
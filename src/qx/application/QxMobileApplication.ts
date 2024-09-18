import { SessionStatus } from "../../session";
import { Viewport } from "../../ui";
import { QxObject } from "../core";
import { QxInit } from "../core/QxInit";
import { QxMobileRoot } from "../mobile/core/QxMobileRoot";

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
        SessionStatus.getInstance();
    }

    getRoot():any {
        return this.widget.getRoot();
    }

    getRouting():any {
        return this.widget.getRouting();
    }

}
import { Viewport } from "../../ui";
import { QxObject } from "../core";
import { QxInit } from "../core/QxInit";
import { QxMobileRoot } from "../mobile/core/QxMobileRoot";

export class QxMobileApplication extends QxObject {
    root: QxMobileRoot;
    viewport: Viewport;

    static instance: QxMobileApplication;

    static getInstance(rootWidget: any): QxMobileApplication {
        if (!this.instance)
            this.instance = new QxMobileApplication(rootWidget);
        return this.instance;
    }

    private constructor(rootWidget: any) {
        super(QxInit.getApplication());
        this.root = QxMobileRoot.getInstance(rootWidget);
        this.viewport = Viewport.getInstance();
        this.root.add(this.viewport);
    }

    initialize() {
        console.log('----- MOBILE2 STARTING -----');
        (window as any).X = this;
    }

}
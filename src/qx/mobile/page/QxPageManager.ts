import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export class QxPageManager extends QxObject {
    static instance: QxPageManager;

    static getInstance(): QxPageManager {
        if (!this.instance)
            this.instance = new QxPageManager();
        return this.instance;
    }

    private constructor() {
        super(QxFactory.mobilePageManager());
    }

}

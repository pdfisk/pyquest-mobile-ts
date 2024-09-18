import { QxMobileApplication } from "../../application/QxMobileApplication";
import { QxMobileComposite } from "../container/QxMobileComposite";

export class QxMobileRoot extends QxMobileComposite {

    static instance: QxMobileRoot;

    static getInstance(): QxMobileRoot {
        if (!this.instance)
            this.instance = new QxMobileRoot();
        return this.instance;
    }

    constructor() {
        super(QxMobileApplication.getInstance().getRoot());
    }

}

import { QxMobileComposite } from "../container/QxMobileComposite";

export class QxMobileRoot extends QxMobileComposite {

    static instance: QxMobileRoot;

    static getInstance(rootWidget: any): QxMobileRoot {
        if (!this.instance)
            this.instance = new QxMobileRoot(rootWidget);
        return this.instance;
    }

    constructor(rootWidget: any) {
        super(rootWidget);
    }

}

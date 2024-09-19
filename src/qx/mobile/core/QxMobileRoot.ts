import { QxMobileApplication } from "../../application/QxMobileApplication";
import { QxMobileComposite } from "../container/QxMobileComposite";

export class QxMobileRoot extends QxMobileComposite {

    static instance: QxMobileRoot;

    static getInstance(): QxMobileRoot {
        if (!this.instance)
            this.instance = new QxMobileRoot();
        return this.instance;
    }

    static getSize(): any {
        return this.getInstance().getSize();
    }

    constructor() {
        super(QxMobileApplication.getInstance().getRoot());
    }

    getSize(): any {
        const element: any = this.widget.getContentElement();
        if (!element) return;
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
    }

}

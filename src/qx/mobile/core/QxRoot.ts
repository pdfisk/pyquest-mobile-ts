import { QxMobileApplication } from "../../application/QxMobileApplication";
import { QxComposite } from "../container/QxComposite";

export class QxRoot extends QxComposite {

    static instance: QxRoot;

    static getInstance(): QxRoot {
        if (!this.instance)
            this.instance = new QxRoot();
        return this.instance;
    }

    static getHeight():number {
        return this.getSize().height;
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

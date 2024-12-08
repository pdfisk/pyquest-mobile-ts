import { QxFactory } from "../../../factory";
import { QxWidget } from "./QxWidget";

export class QxBlocker extends QxWidget {

    constructor() {
        super(QxFactory.mobileBlocker());
    }

    getSize(): any {
        const element: any = this.widget.getContentElement();
        if (!element) return;
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
    }

}

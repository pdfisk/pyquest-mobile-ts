import { QxComposite } from "../container/QxComposite";
import { QxWidget } from "../core/QxWidget";

export class QxNavigation extends QxComposite {
    static instance: QxNavigation | null = null;

    static getInstance(widget: any = null) {
        if (this.instance == null && widget !== null)
            this.instance = new QxNavigation(widget);
        return this.instance;
    }

     constructor(widget: any) {
        super(widget);
    }

    addLeft(widget: QxWidget) {

    }

}

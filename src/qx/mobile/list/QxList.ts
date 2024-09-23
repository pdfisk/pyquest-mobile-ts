import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxList extends QxWidget {

    constructor(config: any) {
        super(QxFactory.mobileList(config));
        (window as any).X = this;
    }

    addListener(eventName: string, fn: Function, context: any) {
        this.widget.addListener(eventName, fn, context);
    }

    getItem(index: number): any {
        return this.getModel().getItem(index);
    }

    getModel(): any {
        return this.widget.getModel();
    }

    setData(labels: string[]) {
        const model = (window.qx as any).data.marshal.Json.createModel(labels.sort());
        this.widget.setModel(model);
        this.scrollToTop();
    }

    setModel(model: any) {
        this.widget.setModel(model);
    }

    scrollToTop() {
        this.scrollToY(0);
    }

    scrollToY(y: number) {
        // this.widget.scrollToY(y);
    }

}

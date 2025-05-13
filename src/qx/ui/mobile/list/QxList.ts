import { QxFactory } from '../../../factory/QxFactory';
import { QxWidget } from "../core/QxWidget";

export class QxList extends QxWidget {

    constructor(config: any) {
        super(QxFactory.mobileList(config));
    }

    getItem(index: number): any {
        return this.getModel().getItem(index);
    }

    getItemCount(): number {
        return this.widget.getItemCount();
    }

    getItems(): any[] {
        const items: any[] = [];
        for (let i = 0; i < this.getItemCount(); i++)
            items.push(this.getItem(i));
        return items;
    }

    getModel(): any {
        return this.widget.getModel();
    }

    render() {
        this.widget.render();
    }

    setData(labels: string[]) {
        const model = (window as any).qx.data.marshal.Json.createModel(labels.sort());
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

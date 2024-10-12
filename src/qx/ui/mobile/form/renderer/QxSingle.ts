import { QxFactory } from "../../../../factory/QxFactory";
import { QxWidget } from "../../core/QxWidget";
import { QxForm } from "../QxForm";
import { QxAbstractRenderer } from "./QxAbstractRenderer";

export class QxSingle extends QxAbstractRenderer {

    constructor(form: QxForm) {
        super(QxFactory.mobileSingle(form.widget));
    }

    addItems(items: QxWidget[], names: string[], title: string | null = null) {
        const itemWidgets: any[] = [];
        items.forEach((item) => {
            itemWidgets.push(item.widget);
        });
        this.widget.addItems(itemWidgets, names, title);
    }

}

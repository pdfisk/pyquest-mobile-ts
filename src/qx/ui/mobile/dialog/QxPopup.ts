import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxPopup extends QxWidget {

    constructor() {
        super(QxFactory.mobilePopup());
    }

    addWidget(widget: QxWidget) {
        this.widget.add(widget.widget);
    }

    setTitle(label: string) {
        return this.widget.setTitle(label);
    }

}

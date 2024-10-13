import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxScroll extends QxWidget {

    constructor() {
        super(QxFactory.mobileScroll());
    }

    add(child: QxWidget, options: any = {}) {
        this.widget.add(child.widget, options);
    }

}

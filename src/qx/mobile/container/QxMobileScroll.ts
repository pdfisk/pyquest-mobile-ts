import { QxFactory } from "../../factory";
import { QxMobileWidget } from "../core/QxMobileWidget";

export class QxMobileScroll extends QxMobileWidget {

    constructor() {
        super(QxFactory.mobileComposite());
    }

    add(child: QxMobileWidget, options: any = {}) {
        this.widget.add(child.widget, options);
    }

}

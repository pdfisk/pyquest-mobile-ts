import { QxFactory } from "../../factory";
import { QxMobileWidget } from "../core/QxMobileWidget";

export  class QxMobileComposite extends QxMobileWidget {
 
    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    add(child: QxMobileWidget, options: any = {}) {
        this.widget.add(child.widget, options);
    }

    initialize() {
        super.initialize();
    }

}

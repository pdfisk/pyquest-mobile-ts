import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export  class QxComposite extends QxWidget {
 
    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    add(child: QxWidget, options: any = {}) {
        this.widget.add(child.widget, options);
    }

}

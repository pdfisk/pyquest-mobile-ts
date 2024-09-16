import { QxFactory } from "../../factory";
import { QxMobileWidget } from "../core/QxMobileWidget";

export  class QxMobileComposite extends QxMobileWidget {
 
    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobilePageManager());
    }

}

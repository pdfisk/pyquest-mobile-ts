import { QxFactory } from "../../factory";
import { QxMobileWidget } from "../core/QxMobileWidget";

export class QxList extends QxMobileWidget {

    constructor(config: any) {
        super(QxFactory.mobileList(config));
    }

    setModel(model: any) {
        this.widget.setModel(model);
    }

}

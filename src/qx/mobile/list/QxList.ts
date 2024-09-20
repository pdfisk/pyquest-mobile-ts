import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxList extends QxWidget {

    constructor(config: any) {
        super(QxFactory.mobileList(config));
    }

    setModel(model: any) {
        this.widget.setModel(model);
    }

}

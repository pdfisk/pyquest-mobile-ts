import { QxFactory } from "../../factory";
import { QxMobileWidget } from "../core/QxMobileWidget";

export class QxList extends QxMobileWidget {

    constructor() {
        super(QxFactory.mobileList());
    }

}

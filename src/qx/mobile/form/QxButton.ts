import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxButton extends QxWidget {

    constructor() {
        super(QxFactory.mobileButton());
    }

}

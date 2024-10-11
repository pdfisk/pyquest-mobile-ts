import { QxFactory } from "../../../factory";
import { QxAbstractBox } from "./QxAbstractBox";

export class QxVBoxLayout extends QxAbstractBox {

    constructor() {
        super(QxFactory.mobileVBox());
    }

}

import { QxFactory } from "../../factory";
import { QxAbstractBox } from "./QxAbstractBox";

export class QxHBoxLayout extends QxAbstractBox {

    constructor() {
        super(QxFactory.mobileHBox());
    }

}

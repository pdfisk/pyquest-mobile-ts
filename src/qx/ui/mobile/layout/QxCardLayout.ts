import { QxFactory } from "../../../factory";
import { QxAbstractLayout } from "./QxAbstractLayout";

export class QxCardLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.mobileCard());
    }

}

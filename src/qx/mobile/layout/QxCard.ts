import { QxFactory } from "../../factory";
import { QxAbstractLayout } from "./QxAbstractLayout";

export  class QxCard extends QxAbstractLayout {

    constructor() {
        super(QxFactory.mobileCard);
    }

}

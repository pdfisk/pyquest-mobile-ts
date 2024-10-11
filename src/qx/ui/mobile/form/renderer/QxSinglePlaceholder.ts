import { QxFactory } from "../../../../factory/QxFactory";
import { QxSingle } from "./QxSingle";

export class QxSinglePlaceholder extends QxSingle {

    constructor() {
        super(QxFactory.mobileSinglePlaceholder());
    }

}

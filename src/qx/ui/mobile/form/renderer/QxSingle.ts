import { QxFactory } from "../../../../factory/QxFactory";
import { QxForm } from "../QxForm";
import { QxAbstractRenderer } from "./QxAbstractRenderer";

export class QxSingle extends QxAbstractRenderer {

    constructor(form: QxForm) {
        super(QxFactory.mobileSingle(form.widget));
    }

}

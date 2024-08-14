import { QxFactory } from "../../factory/QxFactory";
import { QxForm } from "./QxForm";
import { QxFormAbstractRenderer } from "./QxFormAbstractRenderer";

export class QxFormRendererSingle extends QxFormAbstractRenderer {

    constructor(form: QxForm) {
        super(QxFactory.formRendererSingle(form.widget));
    }

}

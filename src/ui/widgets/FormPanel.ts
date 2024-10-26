import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxForm } from "../../qx/ui/mobile/form/QxForm";
import { QxSingle } from "../../qx/ui/mobile/form/renderer/QxSingle";

export class FormPanel extends QxWidget {
    form: QxForm;
    single: QxSingle;

    constructor() {
        super();
        this.form = new QxForm;
        this.single = new QxSingle(this.form);
    }

    addItems(items: QxWidget[], names: string[]) {
        this.single.addItems(items, names);
    }

}

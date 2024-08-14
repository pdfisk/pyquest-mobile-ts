import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";

export class DetailsPanel extends AbstractForm {
    categoryField: QxTextField;

    constructor() {
        super();
        this.categoryField = new QxTextField();
    }

    clear() {
        this.categoryField.clear();
    }

    getValue(): string {
        const data: any = {};
        data.category = this.categoryField.getValue();
        return JSON.stringify(data);
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.categoryField, LabelConstants.FieldLabelCategory);
        }
    }

    setValue(jsonStr: string) {
        if (typeof (jsonStr) !== 'string')
            return;
        const data = JSON.parse(jsonStr);
        if (typeof (data.category) !== 'string')
            data.category = '';
        this.categoryField.setValue(data.category);
    }

}

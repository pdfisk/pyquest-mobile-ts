import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";

export class ProjectsDetailsPanel extends AbstractForm {
    authorField: QxTextField;
    categoryField: QxTextField;

    constructor() {
        super();
        this.authorField  = new QxTextField;
        this.categoryField = new QxTextField;
    }

    clear() {
        this.authorField.clear();
        this.categoryField.clear();
    }

    getValue(): string {
        const data: any = {};
        data.author = this.authorField.getValue();
        data.category = this.categoryField.getValue();
        return JSON.stringify(data);
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.authorField, LabelConstants.FieldLabelAuthor);
            this.form.add(this.categoryField, LabelConstants.FieldLabelCategory);
        }
    }

    setValue(jsonStr: string) {
        if (typeof (jsonStr) !== 'string' || jsonStr.length < 2)
            return;
        const data = JSON.parse(jsonStr);
        if (typeof (data.author) !== 'string')
            data.author = '';
        if (typeof (data.category) !== 'string')
            data.category = '';
        this.authorField.setValue(data.author);
        this.categoryField.setValue(data.category);
    }

}

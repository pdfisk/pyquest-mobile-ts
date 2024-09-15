import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";

export class ProjectsDetailsPanel extends AbstractForm {
    authorField: QxTextField;
    categoryField: QxTextField;
    createdAtField: QxTextField;
    idField: QxTextField;
    updatedAtField: QxTextField;

    constructor() {
        super();
        this.authorField = new QxTextField;
        this.categoryField = new QxTextField;
        this.createdAtField = new QxTextField;
        this.idField = new QxTextField;
        this.updatedAtField = new QxTextField;
    }

    clear() {
        this.authorField.clear();
        this.categoryField.clear();
        this.createdAtField.clear();
        this.idField.clear();
        this.updatedAtField.clear();
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
            this.form.add(this.idField, LabelConstants.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants.FieldLabelCreatedAt);
            this.idField.setEnabled(false);
            this.updatedAtField.setEnabled(false);
            this.createdAtField.setEnabled(false);
        }
    }

    setCreatedAt(createdAt: string) {
        this.createdAtField.setValue(createdAt);
    }

    setDetails(jsonStr: string) {
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

    setId(id: string) {
        this.idField.setValue(id);
    }

    setUpdatedAt(updatedAt: string) {
        this.updatedAtField.setValue(updatedAt);
    }

    setValue(value: any) {
        this.setDetails(value.details);
        this.setId(`${value.id}`);
        this.setUpdatedAt(value.updated_at);
        this.setCreatedAt(value.created_at);
    }

}

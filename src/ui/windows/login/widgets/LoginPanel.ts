import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";

export class LoginPanel extends AbstractForm {
    nameField: QxTextField;
    passwordField: QxTextField;

    constructor() {
        super();
        this.nameField = new QxTextField();
        this.passwordField = new QxTextField();
    }

    clear() {
        this.passwordField.clear();
        this.nameField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getName(): string {
        return this.nameField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.nameField, LabelConstants.FieldLabelName);
            this.form.add(this.passwordField, LabelConstants.FieldLabelPassword);
        }
    }

}

import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";

export class LoginPanel extends AbstractForm {
    passwordField: QxTextField;
    userField: QxTextField;

    constructor() {
        super();
        this.passwordField = new QxTextField();
        this.userField = new QxTextField();
    }

    clear() {
        this.passwordField.clear();
        this.userField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.userField, LabelConstants.FieldLabelName);
            this.form.add(this.passwordField, LabelConstants.FieldLabelPassword);
        }
    }

}

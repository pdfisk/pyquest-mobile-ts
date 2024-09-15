import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { AbstractForm } from "../../../widgets/AbstractForm";
import { UsersWindow } from "../UsersWindow";

export class UsersDetailsPanel extends AbstractForm {
    passwordField: QxTextField;
    userField: QxTextField;
    createdAtField: QxTextField;
    idField: QxTextField;
    updatedAtField: QxTextField;
    usersWindow: UsersWindow;

    constructor(usersWindow: UsersWindow) {
        super();
        this.passwordField = new QxTextField;
        this.userField = new QxTextField;
        this.createdAtField = new QxTextField;
        this.idField = new QxTextField;
        this.updatedAtField = new QxTextField;
        this.usersWindow = usersWindow;
    }

    clear() {
        this.passwordField.clear();
        this.userField.clear();
        this.createdAtField.clear();
        this.idField.clear();
        this.updatedAtField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getName(): string {
        return this.userField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.form.add(this.userField, LabelConstants.FieldLabelName);
            this.form.add(this.passwordField, LabelConstants.FieldLabelPassword);
            this.form.add(this.idField, LabelConstants.FieldLabelId);
            this.form.add(this.updatedAtField, LabelConstants.FieldLabelUpdatedAt);
            this.form.add(this.createdAtField, LabelConstants.FieldLabelCreatedAt);
        }
    }

    setName(value: string) {
        this.userField.setValue(value);
    }

    setPassword(value: string) {
        this.passwordField.setValue(value);
    }

    setValue(data:any) {
        this.userField.setValue(data.name);
        this.passwordField.setValue(data.passwd);
        this.idField.setValue(data.id);
        this.updatedAtField.setValue(data.updated_at);
        this.createdAtField.setValue(data.created_at);
     }

}

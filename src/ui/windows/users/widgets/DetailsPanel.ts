import { LabelConstants } from "../../../../constants/LabelConstants";
import { SizeConstants } from "../../../../constants/SizeConstants";
import { QxForm } from "../../../../qx/ui/form/QxForm";
import { QxFormRendererSingle } from "../../../../qx/ui/form/QxFormRendererSingle";
import { QxTextField } from "../../../../qx/ui/form/QxTextField";
import { UsersWindow } from "../UsersWindow";

export class DetailsPanel extends QxFormRendererSingle {
    form: QxForm;
    passwordField: QxTextField;
    userField: QxTextField;
    usersWindow: UsersWindow;

    constructor(usersWindow: UsersWindow) {
        const form = new QxForm;
        super(form);
        this.form = form;
        this.passwordField = new QxTextField;
        this.userField = new QxTextField;
        this.usersWindow = usersWindow;
    }

    clear() {
        this.passwordField.clear();
        this.userField.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    initialize() {
        super.initialize();
        this.setPadding([SizeConstants.PanelPadding]);
    }

    getName(): string {
        return this.userField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    onAppear() {
        super.onAppear();
        this.form.add(this.userField, LabelConstants.FieldLabelName);
        this.form.add(this.passwordField, LabelConstants.FieldLabelPassword);
    }

    setName(value: string) {
        this.userField.setValue(value);
    }

    setPassword(value: string) {
        this.passwordField.setValue(value);
    }

}

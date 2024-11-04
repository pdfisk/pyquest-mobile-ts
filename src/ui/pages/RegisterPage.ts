import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class RegisterPage extends AbstractFormPage {
    nameField: QxTextField;
    passwordField: QxPasswordField;
    static instance: RegisterPage;

    static getInstance(): RegisterPage {
        if (!this.instance)
            this.instance = new RegisterPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageRegister);
        this.nameField = new QxTextField;
        this.passwordField = new QxPasswordField;
   }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.nameField);
        items.push(this.passwordField);
        names.push(LabelConstants.FieldLabelName);
        names.push(LabelConstants.FieldLabelPassword);
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelSave,
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelLogin
        ];
    }

    getName(): string {
        return this.nameField.getValue();
    }

    getPassword(): string {
        return this.passwordField.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onSave() {
        const name: string = this.getName();
        const password: string = this.getPassword();
        console.log('RegisterPage onSave', name, password);
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionLogin:
                this.showLogin();
                break;
            case ActionConstants.ActionSave:
                this.onSave();
                break;
            default:
                console.log('RegisterPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

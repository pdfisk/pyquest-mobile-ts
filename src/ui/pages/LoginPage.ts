import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class LoginPage extends AbstractFormPage {
    nameField: QxTextField;
    passwordField: QxPasswordField;
    static instance: LoginPage;

    static getInstance(): LoginPage {
        if (!this.instance)
            this.instance = new LoginPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageLogin);
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
            LabelConstants.ButtonLabelRegister
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
        console.log('LoginPage onSave', name, password);
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionRegister:
                this.showRegister();
                break;
            case ActionConstants.ActionSave:
                this.onSave();
                break;
            default:
                console.log('LoginPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

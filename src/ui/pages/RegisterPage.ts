import { ActionConstants } from '../../constants/ActionConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { DebugUtil } from '../../vm/util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class RegisterPage extends AbstractFormPage {
    usernameField: QxTextField;
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
        this.usernameField = new QxTextField;
        this.passwordField = new QxPasswordField;
   }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.usernameField);
        items.push(this.passwordField);
        names.push(LabelConstants.FieldLabelUserName);
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

    getUserName(): string {
        return this.usernameField.getValue();
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
        const username: string = this.getUserName();
        const password: string = this.getPassword();
        DebugUtil.log('RegisterPage onSave', username, password);
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
                DebugUtil.log('RegisterPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

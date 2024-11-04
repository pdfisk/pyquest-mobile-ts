import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class RegisterPage extends AbstractFormPage {
    static instance: RegisterPage;

    static getInstance(): RegisterPage {
        if (!this.instance)
            this.instance = new RegisterPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageRegister);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(new QxTextField());
        items.push(new QxPasswordField());
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

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionLogin:
                this.showLogin();
                break;
            default:
                console.log('RegisterPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

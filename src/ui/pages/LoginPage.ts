import { LabelConstants } from "../../constants/LabelConstants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxPasswordField } from "../../qx/ui/mobile/form/QxPasswordField";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class LoginPage extends AbstractFormPage {
    static instance: LoginPage;

    static getInstance(): LoginPage {
        if (!this.instance)
            this.instance = new LoginPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageLogin);
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

    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

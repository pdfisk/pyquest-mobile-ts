import { LabelConstants } from "../../constants/LabelConstants";
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
    }


    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

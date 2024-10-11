import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractFormPage } from "./AbstractFormPage";

export class HomePage extends AbstractFormPage {
    static instance: HomePage;

    static getInstance(): HomePage {
        if (!this.instance)
            this.instance = new HomePage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageHome);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractTextPage } from "./AbstractTextPage";

export class HomePage extends AbstractTextPage {
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

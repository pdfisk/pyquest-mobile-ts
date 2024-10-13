import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractInfoPage } from "./AbstractInfoPage";

export class HomePage extends AbstractInfoPage {
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

    addPageContent() {
        this.addLabel(LabelConstants.LabelPyQuestMobile);
        const news = this.addNews();
        this.addButtonNoMargin(LabelConstants.ButtonLabelReddit);
        this.addButtonNoMargin(LabelConstants.ButtonLabelPatreon);
    }

    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

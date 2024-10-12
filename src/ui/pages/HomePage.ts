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
        this.addLabel('PyQuest');
        this.addButton('Patreon');
        this.addFiller();
    }

    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

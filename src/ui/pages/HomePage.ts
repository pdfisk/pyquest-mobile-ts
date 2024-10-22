import { ColorConstants, StyleConstants, Version } from "../../constants";
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
        const text = `${LabelConstants.LabelPyQuestMobile} ${Version.timestamp}`;
        const topLabel = this.addLabel(text);
        topLabel.setBackgroundColor(ColorConstants.HomePageLabelBackground);
        topLabel.setFontSize(StyleConstants.FontSize_09em);
        topLabel.setFontWeight(StyleConstants.FontWeight450);
        topLabel.setPaddingLeftAndRightPx(7);
        topLabel.setPaddingBottomPx(3);
        topLabel.setBorderRadiusPx(7);
        this.addNews();
    }

    hasBackButton(): boolean {
        return false;
    }

    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

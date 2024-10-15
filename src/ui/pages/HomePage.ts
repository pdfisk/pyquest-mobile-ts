import { UrlConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { BrowserUtil } from "../../util/BrowserUtil";
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
        if (BrowserUtil.detectDesktopBrowser())
            this.addButtonNoMargin(LabelConstants.ButtonLabelDesktop,
                () => { BrowserUtil.openNewTab(UrlConstants.desktop) });
        this.addButtonNoMargin(LabelConstants.ButtonLabelReddit,
            () => { BrowserUtil.openNewTab(UrlConstants.reddit) });
        this.addButtonNoMargin(LabelConstants.ButtonLabelPatreon,
            () => { BrowserUtil.openNewTab(UrlConstants.patreon) });
    }

    onAppear() {
        super.onAppear();
        this.addPageContent();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

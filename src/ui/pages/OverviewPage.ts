import { LabelConstants } from "../../constants/LabelConstants";
import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export class OverviewPage extends QxNavigationPage {
    static instance: OverviewPage;

    static getInstance(): OverviewPage {
        if (!this.instance)
            this.instance = new OverviewPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageOverview);
    }

}

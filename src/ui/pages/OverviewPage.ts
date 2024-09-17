import { LabelConstants } from "../../constants/LabelConstants";
import { QxNavigationPage } from "../../qx/mobile/page/QxNavigationPage";

export class OverviewPage extends QxNavigationPage {

    constructor() {
        super();
        this.setTitle(LabelConstants.PageOverview);
    }

}

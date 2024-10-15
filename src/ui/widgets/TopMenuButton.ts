import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { LabelConstants } from "../../constants";
import { QxNavigationBarButton } from "../../qx/ui/mobile/navigationBar/QxNavigationBarButton";
import { AbstractRoutingPage } from "../pages/AbstractRoutingPage";
import { PageConstants } from "../../constants/PageConstants";

export class TopMenuButton extends QxNavigationBarButton {

    constructor() {
        const fn = () => { QxMobileApplication.executeGet(PageConstants.routeOverview); };
        super(LabelConstants.ButtonLabelTopMenu, fn);
    }

}

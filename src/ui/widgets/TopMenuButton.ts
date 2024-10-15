import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { LabelConstants } from "../../constants";
import { QxNavigationBarButton } from "../../qx/ui/mobile/navigationBar/QxNavigationBarButton";
import { AbstractRoutingPage } from "../pages/AbstractRoutingPage";

export class TopMenuButton extends QxNavigationBarButton {

    constructor() {
        const fn = () => {
            QxMobileApplication.executeGet('/');
             };
        super(LabelConstants.ButtonLabelTopMenu, fn);
    }

}

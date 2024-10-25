import { LabelConstants } from "../../constants";
import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxNavigationBarButton } from "../../qx/ui/mobile/navigationBar/QxNavigationBarButton";

export class TopMenuButton extends QxNavigationBarButton {

    constructor() {
        const fn = () => { QxMobileApplication.executeGet(PageConstants.routeTopMenu); };
        super(LabelConstants.ButtonLabelTopMenu, fn);
    }

}

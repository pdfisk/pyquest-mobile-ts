import { LabelConstants } from '../../constants/LabelConstants';
import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxNavigationBarButton } from "../../qx/ui/mobile/navigationBar/QxNavigationBarButton";

export class TopMenuButton extends QxNavigationBarButton {

    constructor(widget: any) {
        const fn = () => { QxMobileApplication.executeGet(PageConstants.routeTopMenu); };
        super(LabelConstants.ButtonLabelTopMenu, fn, widget);
        this.show();
    }

}

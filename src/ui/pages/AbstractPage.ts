import { ColorConstants, LabelConstants, SizeConstants } from "../../constants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxComposite } from "../../qx/mobile/container/QxComposite";
import { RoutingPage } from "./RoutingPage";

export abstract class AbstractPage extends RoutingPage {

    constructor() {
        super();
    }

    addNavbar() {
        const navbar: QxComposite = new QxComposite;
        navbar.setBackgroundColor(ColorConstants.PageButtonBarBackground);
        navbar.setHeightPx(SizeConstants.PageButtonBarHeight);
        navbar.setBorderTopPx(ColorConstants.PageButtonBarBorder, SizeConstants.NavBarBorderTopWidth);
        navbar.setMarginTopPx(SizeConstants.NavBarMarginTopWidth);
        this.add(navbar);
    }

    onAppear() {
        super.onAppear();
        this.setBackButtonText(LabelConstants.ButtonLabelBack);
        this.setShowBackButton(true);
        this.widget._back = () => { this.onBack(); };
        this.addNavbar();
    }

    onBack() {
        QxMobileApplication.back();
    }

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}

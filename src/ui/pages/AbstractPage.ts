import { ColorConstants, LabelConstants, SizeConstants } from "../../constants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { ButtonBar } from "../widgets/ButtonBar";
import { RoutingPage } from "./RoutingPage";

export abstract class AbstractPage extends RoutingPage {

    constructor() {
        super();
    }

    addButtonBar() {
        const buttonbar: ButtonBar = new ButtonBar;
        buttonbar.setBackgroundColor(ColorConstants.PageButtonBarBackground);
        buttonbar.setHeightPx(SizeConstants.PageButtonBarHeight);
        buttonbar.setBorderTopPx(ColorConstants.PageButtonBarBorder, SizeConstants.NavBarBorderTopWidth);
        buttonbar.setMarginTopPx(SizeConstants.NavBarMarginTopWidth);
        this.add(buttonbar);
    }

    onAppear() {
        super.onAppear();
        this.setBackButtonText(LabelConstants.ButtonLabelBack);
        this.setShowBackButton(true);
        this.widget._back = () => { this.onBack(); };
        this.addButtonBar();
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

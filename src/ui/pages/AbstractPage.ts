import { ColorConstants, LabelConstants, SizeConstants } from "../../constants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { ButtonBar } from "../widgets/ButtonBar";
import { RoutingPage } from "./RoutingPage";

export abstract class AbstractPage extends RoutingPage {
    buttonbar: ButtonBar = new ButtonBar;

    constructor() {
        super();
    }

    addButton(label: string) {
        this.buttonbar.addButton(label);
    }

    addButtonBar() {
        this.buttonbar.setBackgroundColor(ColorConstants.PageButtonBarBackground);
        this.buttonbar.setHeightPx(SizeConstants.PageButtonBarHeight);
        this.buttonbar.setBorderTopPx(ColorConstants.PageButtonBarBorder, SizeConstants.NavBarBorderTopWidth);
        this.buttonbar.setMarginTopPx(SizeConstants.NavBarMarginTopWidth);
        this.add(this.buttonbar);
        this.addButtons();
    }

    addButtons() {
        const buttons: string[] = this.defaultButtons();
        buttons.forEach((label: string) => {
            this.addButton(label);
        });
    }

    defaultButtons(): string[] {
        return [];
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

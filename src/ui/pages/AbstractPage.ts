import { ColorConstants, LabelConstants, SizeConstants } from "../../constants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { StringUtil } from "../../util/StringUtil";
import { ButtonBar } from "../widgets/ButtonBar";
import { AbstractRoutingPage } from "./AbstractRoutingPage";

export abstract class AbstractPage extends AbstractRoutingPage {
    buttonbar: ButtonBar = new ButtonBar;
    deferredHeight: number = 0;
    deferredWidth: number = 0;

    addButton(label: string, fn: Function) {
        this.buttonbar.addButton(label, fn);
    }

    addButtonBar() {
        this.buttonbar.setBorderTopPx(ColorConstants.ButtonBarBorder, SizeConstants.ButtonBarBorderTopWidth);
        this.buttonbar.setMarginTopPx(SizeConstants.ButtonBarMarginTopWidth);
        this.add(this.buttonbar);
        this.addButtons();
    }

    addButtons() {
        const buttons: string[] = this.defaultButtons();
        buttons.forEach((label: string) => {
            const fn: Function = () => { this.onTap(StringUtil.asTag(label)); }
            this.addButton(label, fn);
        });
    }

    defaultButtons(): string[] {
        return [];
    }

    abstract isContentReady(): boolean;

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

    resizeWidthAndHeight(width: number, height: number) {
        const adjustedWidth: number = width - SizeConstants.ButtonBarWidthOffset;
        const adjustedHeight: number = height - SizeConstants.ButtonBarButtonHeight - SizeConstants.ButtonBarHeightOffset;
        if (this.isContentReady()) {
            this.setAdjustedWidthAndHeight(adjustedWidth, adjustedHeight);
        }
        else {
            this.deferredWidth = adjustedWidth;
            this.deferredHeight = adjustedHeight;
        }
    }

    abstract setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void;

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}

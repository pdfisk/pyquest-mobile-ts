import { ColorConstants } from '../../../constants/ColorConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxMobileApplication } from "../../../qx/application/QxMobileApplication";
import { QxComposite } from "../../../qx/ui/mobile/container/QxComposite";
import { QxSelectBox } from '../../../qx/ui/mobile/form/QxSelectBox';
import { HtmlStrUtil } from '../../../util/HtmlStrUtil';
import { ButtonBar } from "../../widgets/ButtonBar";
import { NavigationBar } from "../../widgets/NavigationBar";
import { TopMenuButton } from "../../widgets/TopMenuButton";
import { AbstractRoutingPage } from "./AbstractRoutingPage";

export abstract class AbstractPage extends AbstractRoutingPage {
    buttonbar: ButtonBar = new ButtonBar;
    deferredHeight: number = 0;
    deferredWidth: number = 0;
    leftContainer: QxComposite | null = null;
    navigationBar: NavigationBar | null = null;
    rightContainer: QxComposite | null = null;
    selectBox: QxSelectBox | null = null;
    topMenuButton: TopMenuButton | null = null;

    addBackButton() {
        this.widget._back = () => { this.onBack(); };
    }

    addButton(label: string, fn: Function) {
        this.buttonbar.addButton(label, fn);
    }

    addButtonBar() {
        this.buttonbar.setBorderTopPx(ColorConstants.ButtonBarBorder, SizeConstants.ButtonBarBorderTopWidth);
        this.buttonbar.setMarginTopPx(SizeConstants.ButtonBarMarginTopWidth);
        this.add(this.buttonbar);
        this.addButtons();
        this.addExtraButtons();
    }

    addButtons() {
        this.buttonbar.removeAll();
        const buttons: string[] = this.defaultButtons();
        buttons.forEach((label: string) => {
            const fn: Function = () => { this.onTap(HtmlStrUtil.asTag(label)); }
            this.addButton(label, fn);
        });
    }

    addSelectBox(items: string[], fn: Function | null = null): QxSelectBox {
        this.selectBox = new QxSelectBox(items, fn);
        this.buttonbar.add(this.selectBox);
        return this.selectBox;
    }

    addTopMenuButton() {
        if (this.topMenuButton !== null)
            return;
        this.topMenuButton = new TopMenuButton(this.widget._getButton());
    }

    addExtraButtons() {
    }

    defaultButtons(): string[] {
        return [];
    }

    getNavigationBar(): NavigationBar {
        if (this.navigationBar == null)
            this.navigationBar = new NavigationBar(this.widget.getLeftContainer().getLayoutParent());
        return this.navigationBar;
    }

    getRightContainer(): QxComposite {
        if (this.rightContainer == null)
            this.rightContainer = new QxComposite(this.widget.getRightContainer());
        return this.rightContainer;
    }

    getNavBarWidget(): any {
        return this.widget.getLeftContainer().getLayoutParent();
    }

    hasBackButton(): boolean {
        return true;
    }

    hasButtonBar(): boolean {
        return true;
    }

    hasTopMenuMenu(): boolean {
        return true;
    }

    abstract isContentReady(): boolean;

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.setBackButtonText(LabelConstants.ButtonLabelBack);
        this.setShowBackButton(true);
        if (this.hasBackButton())
            this.addBackButton();
        if (this.hasTopMenuMenu())
            this.addTopMenuButton();
        if (this.hasButtonBar())
            this.addButtonBar();
    }

    onBack() {
        QxMobileApplication.back();
    }

    resizeWidthAndHeight(width: number, height: number) {
        const adjustedWidth: number = width - SizeConstants.ButtonBarWidthOffset;
        const adjustedHeight: number = height - (this.hasButtonBar() ? (SizeConstants.ButtonBarButtonHeight + SizeConstants.ButtonBarHeightOffset) : 0);
        if (this.isContentReady()) {
            this.setAdjustedWidthAndHeight(adjustedWidth, adjustedHeight);
        }
        else {
            this.deferredWidth = adjustedWidth;
            this.deferredHeight = adjustedHeight;
        }
    }

    setSelectionBoxSelection(index: number) {
        if (this.selectBox)
            this.selectBox.setSelection(index);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    };

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}

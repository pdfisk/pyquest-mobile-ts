import { QxComposite } from "../../../qx/ui/mobile/container/QxComposite";
import { ColorConstants, LabelConstants, SizeConstants } from "../../../constants";
import { QxMobileApplication } from "../../../qx/application/QxMobileApplication";
import { StringUtil } from "../../../util/StringUtil";
import { ButtonBar } from "../../widgets/ButtonBar";
import { TopMenuButton } from "../../widgets/TopMenuButton";
import { AbstractRoutingPage } from "./AbstractRoutingPage";
import { NavigationBar } from "../../widgets/NavigationBar";
import { QxFactory } from "../../../qx";

export abstract class AbstractPage extends AbstractRoutingPage {
    buttonbar: ButtonBar = new ButtonBar;
    deferredHeight: number = 0;
    deferredWidth: number = 0;
    leftContainer: QxComposite | null = null;
    rightContainer: QxComposite | null = null;
    navigationBar: NavigationBar | null = null;

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
    }

    addButtons() {
        const buttons: string[] = this.defaultButtons();
        buttons.forEach((label: string) => {
            const fn: Function = () => { this.onTap(StringUtil.asTag(label)); }
            this.addButton(label, fn);
        });
    }

    addTopMenuButton() {
        const topMenuButton = new TopMenuButton;
        this.getRightContainer().add(topMenuButton);
        // const rightContainerWidget = QxFactory.mobileComposite();
        // const navBar = this.widget.getLayoutParent().getLayoutParent().getNavigationBar();
        // rightContainerWidget.add(topMenuButton.widget);
        // navBar.add(rightContainerWidget);
    }

    defaultButtons(): string[] {
        return [];
    }

    getLeftContainer(): QxComposite {
        if (this.leftContainer == null)
            this.leftContainer = new QxComposite(this.widget.getLeftContainer());
        return this.leftContainer;
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

    getNavBarWidget() : any {
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

    abstract setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void;

    setBackButtonText(text: string) {
        this.widget.setBackButtonText(text);
    }

    setShowBackButton(value: boolean) {
        this.widget.setShowBackButton(value);
    }

}
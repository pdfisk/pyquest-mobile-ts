import { SizeConstants } from "../../constants";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { InfoPanel } from "../widgets/InfoPanel";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractInfoPage extends AbstractPage {
    infoPanel: InfoPanel;

    protected constructor() {
        super();
        this.infoPanel = new InfoPanel;
    }

    addContent() {
        this.addContentWidget(this.infoPanel);
    }

    addButton(label: string, fn: Function | undefined = undefined) {
        this.infoPanel.addButton(label, fn);
    }

    addFiller(height: number = -1) {
        this.infoPanel.addFiller(height);
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null) {
        this.infoPanel.addForm(items, names, title);
    }

    addLabel(text: string) {
        this.infoPanel.addLabel(text);
    }

    isContentReady(): boolean {
        return this.infoPanel instanceof InfoPanel;
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setInfoHeight(adjustedHeight - SizeConstants.TextPanelHeightAdjust);
    }

    setInfoHeight(adjustedHeight: number) {
        this.infoPanel?.setHeightPx(adjustedHeight);
    }

}

import { SizeConstants } from "../../../constants";
import { QxWidget } from "../../../qx/ui/mobile/core/QxWidget";
import { FormPanel } from "../../widgets/FormPanel";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractFormPage extends AbstractPage {
    formPanel: FormPanel;

    protected constructor() {
        super();
        this.formPanel = new FormPanel;
    }

    addContent() {
        this.addContentWidget(this.formPanel.single);
    }

    addItems(items: QxWidget[], names: string[], title: string | null = null) {
        this.formPanel.addItems(items, names, title);
    }

    isContentReady(): boolean {
        return this.formPanel instanceof FormPanel;
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setFormHeight(adjustedHeight - SizeConstants.TextPanelHeightAdjust);
    }

    setFormHeight(adjustedHeight: number) {
        this.formPanel?.setHeightPx(adjustedHeight);
    }

}

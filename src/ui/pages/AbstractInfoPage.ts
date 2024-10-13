import { SizeConstants } from "../../constants";
import { QxLabel } from "../../qx/ui/mobile/basic/QxLabel";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { FormPanel } from "../widgets/FormPanel";
import { InfoPanel } from "../widgets/InfoPanel";
import { NewsPanel } from "../widgets/NewsPanel";
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

    addButton(label: string, fn: Function | null = null, withMargin: boolean = true): QxButton {
        return this.infoPanel.addButton(label, fn, withMargin);
    }

    addButtonNoMargin(label: string, fn: Function | null = null): QxButton {
        return this.addButton(label, fn, false);
    }

    addFiller(height: number = -1): QxWidget {
        return this.infoPanel.addFiller(height);
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null): FormPanel {
        return this.infoPanel.addForm(items, names, title);
    }

    addFormNoMargin(items: QxWidget[], names: string[], title: string | null = null): FormPanel {
        return this.infoPanel.addForm(items, names, title,false);
    }

    addLabel(text: string): QxLabel {
        return this.infoPanel.addLabel(text);
    }

    addNews(height: number = -1): NewsPanel {
        return this.infoPanel.addNews(height);
    }

    addScroll(height: number = -1): QxWidget {
        return this.infoPanel.addScroll(height);
    }

    addSpacer(size: number = 5): QxWidget {
        return this.infoPanel.addSpacer(size);
    }

    hasButtonBar(): boolean {
        return false;
    }

    isContentReady(): boolean {
        return this.infoPanel instanceof InfoPanel;
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setInfoHeight(adjustedHeight - SizeConstants.NoButtonsPageHeightAdjust);
    }

    setInfoHeight(adjustedHeight: number) {
        this.infoPanel?.setHeightPx(adjustedHeight);
    }

}

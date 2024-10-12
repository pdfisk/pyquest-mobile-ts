import { FontConstants, SizeConstants } from "../../constants";
import { QxLabel } from "../../qx/ui/mobile/basic/QxLabel";
import { QxVBox } from "../../qx/ui/mobile/container/QxVBox";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { FormPanel } from "./FormPanel";

export class InfoPanel extends QxVBox {

    constructor() {
        super();
        (window as any).X = this;
    }

    addButton(label: string, fn: Function | undefined = undefined): QxButton {
        const button = new QxButton(label, fn);
        button.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        this.addReset(button);
        return button;
    }

    addFiller(size: number = -1): QxWidget {
        const widget = new QxWidget;
        if (size > 0) {
            widget.setHeightPx(size);
            return this.add(widget);
        }
        else return this.addFlexReset(widget);
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null): FormPanel {
        const formPanel = new FormPanel;
        formPanel.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        formPanel.addItems(items, names, title);
        this.addReset(formPanel);
        return formPanel;
    }

    addLabel(text: string): QxLabel {
        const label = new QxLabel(text);
        label.setMarginLeftAndRightPx(SizeConstants.InfoPanelLeftAndRightMargins);
        label.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
        label.setFontWeightBold();
        label.setFontSize(FontConstants.FontSize1_5Em);
        this.addReset(label);
        return label;
    }

    addSpacer(size: number = 5): QxWidget {
        return this.addFiller(size);
    }

}

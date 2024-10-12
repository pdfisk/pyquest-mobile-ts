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
        this.addReset(button);
        return button;
    }

    addFiller(height: number = -1): QxWidget {
        const widget = new QxWidget;
        if (height > 0) {
            widget.setHeightPx(height);
            return this.addReset(widget);
        }
        else return this.addFlexReset(widget);
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null): FormPanel {
        const formPanel = new FormPanel;
        formPanel.addItems(items, names, title);
        this.addReset(formPanel);
        return formPanel;
    }

    addLabel(text: string): QxLabel {
        const label = new QxLabel(text);
        this.addReset(label);
        return label;
    }

}

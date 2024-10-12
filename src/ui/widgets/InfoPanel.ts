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

    addButton(label: string, fn: Function | undefined = undefined):QxButton {
        const button = new QxButton(label, fn);
        this.add(button);
        button.resetHeight();
        return button;
    }

    addFiller(height: number = -1):QxWidget {
        const widget = new QxWidget;
        if (height > 0) {
            widget.setHeightPx(height);
            this.add(widget);
        }
        else this.addFlex(widget);
        widget.resetHeight();
        return widget;
    }

    addForm(items: QxWidget[], names: string[], title: string | null = null):FormPanel {
        const formPanel = new FormPanel;
        formPanel.addItems(items, names, title);
        this.add(formPanel);
        formPanel.resetHeight();
        return formPanel;
    }

    addLabel(text: string):QxLabel {
        const label = new QxLabel(text);
        this.add(label);
        label.resetHeight();
        return label;
    }

}

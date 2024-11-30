import { QxLabel } from "../basic/QxLabel";
import { QxWidget } from "../core/QxWidget";
import { QxHBoxLayout } from "../layout/QxHBoxLayout";
import { QxPopup } from "./QxPopup";

export class QxTooltip extends QxPopup {

    static show(message: string): QxTooltip {
        const tooltip = new QxTooltip(message);
        tooltip.show();
        return tooltip;
    }

    constructor(text: string) {
        super(text);
    }

    getLabelOrButton(message: string): QxWidget {
        return new QxLabel(message);
    }

}

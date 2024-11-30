import { QxLabel } from "../basic/QxLabel";
import { QxWidget } from "../core/QxWidget";
import { QxPopup } from "./QxPopup";

export class QxTooltip extends QxPopup {

    static show(message: string, anchor: QxWidget | null = null, show: boolean = true): QxTooltip {
        const tooltip = new QxTooltip(message);
        if (anchor)
            tooltip.setAnchor(anchor);
        if (show)
            tooltip.show();
        return tooltip;
    }

    constructor(text: string, delay: number = 5000) {
        super(text);
        if (delay > 0)
            this.hideWithDelay(delay);
    }

    getLabelOrButton(message: string): QxWidget {
        return new QxLabel(message);
    }

}

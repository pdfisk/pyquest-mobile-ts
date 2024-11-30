import { QxLabel } from "../basic/QxLabel";
import { QxWidget } from "../core/QxWidget";
import { QxPopup } from "./QxPopup";

export class QxTooltip extends QxPopup {

    static show(message: string): QxTooltip {
        const popup = new QxTooltip(message);
        popup.show();
        return popup;
    }

    constructor(text: string) {
        super(text);
    }

    getLabelOrButton(message: string): QxWidget {
        return new QxLabel(message);
    }

}

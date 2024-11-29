import { QxLabel } from "../basic/QxLabel";
import { QxWidget } from "../core/QxWidget";
import { QxPopup } from "./QxPopup";

export class QxTooltip extends QxPopup {

    static show(message: string) {
        const popup = new QxTooltip(message);
    }

    constructor(text: string) {
        super(text);
    }

    getLabelOrButton(message: string): QxWidget {
        return new QxLabel(message);
    }

}

import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxLabel extends QxWidget {

    constructor(value: string) {
        super(QxFactory.mobileLabel(value));
    }

    setDefaultCssClass(className: string) {
        this.widget.setDefaultCssClass(className);
    }

    setValue(text: string) {
        this.widget.setValue(text);
    }

}

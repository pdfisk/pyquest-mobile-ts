import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxTextArea extends QxWidget {

    constructor() {
        super(QxFactory.mobileTextArea());
    }

    getValue(): string {
        if (this.widget)
            return this.widget.getValue();
        return '';
    }

    setValue(text: string) {
        if (this.widget)
            this.widget.setValue(text);
    }

}

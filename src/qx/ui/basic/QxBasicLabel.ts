import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicLabel extends QxWidget {

    constructor(text: string = '') {
        super(QxFactory.basicLabel(text));
    }

    getValue(): string {
        return this.widget.getValue();
    }

    setValue(value: string) {
        this.widget.setValue(value);
    }

}

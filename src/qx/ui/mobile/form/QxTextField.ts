import { QxFactory } from "../../../factory";
import { QxInput } from "./QxInput";

export class QxTextField extends QxInput {

    constructor() {
        super(QxFactory.mobileTextField());
    }

    clear() {
        this.setValue('');
    }

    getValue(): string {
        if (this.widget)
            return this.widget.getValue();
        return '';
    }

    setReadOnly(value: boolean) {
        this.widget.setReadOnly(value);
    }

    setValue(text: string) {
        if (this.widget)
            this.widget.setValue(text);
    }

}

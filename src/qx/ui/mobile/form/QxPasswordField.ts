import { QxFactory } from "../../../factory";
import { QxInput } from "./QxInput";

export class QxPasswordField extends QxInput {

    constructor() {
        super(QxFactory.mobilePassowrdField());
    }

    clear() {
        this.setValue('');
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

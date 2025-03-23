import { QxFactory } from '../../../factory/QxFactory';
import { QxWidget } from "../core/QxWidget";

export class QxTextArea extends QxWidget {

    constructor() {
        super(QxFactory.mobileTextArea());
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

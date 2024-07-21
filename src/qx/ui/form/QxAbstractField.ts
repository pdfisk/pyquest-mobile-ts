import { QxWidget } from '../core/QxWidget';

export abstract class QxAbstractField extends QxWidget {

    constructor(widget: any) {
        super(widget);
    }

    clear() {
        this.setValue('');
    }

    getValue(): string {
        if (!this.widget)
            return '';
        return this.widget.getValue();
    }

    setValue(value: string) {
        if (this.widget)
            this.widget.setValue(value);
    }

}

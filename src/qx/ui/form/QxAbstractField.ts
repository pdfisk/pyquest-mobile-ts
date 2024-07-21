import { QxWidget } from '../core/QxWidget';

export abstract class QxAbstractField extends QxWidget {

    constructor(widget: any) {
        super(widget);
    }

    getValue(): string {
        return this.widget.getValue();
    }

    setValue(value: string) {
        this.widget.setValue(value);
    }

}

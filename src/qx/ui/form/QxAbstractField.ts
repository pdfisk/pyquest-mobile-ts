import { FontConstants } from '../../../constants/FontConstants';
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

    initialize() {
        super.initialize();
        this.setFontFamily(FontConstants.FontFamilyMonospace);
        this.setFontSize(FontConstants.FontSize24Px);
    }

    setValue(value: string) {
        if (this.widget)
            this.widget.setValue(value);
    }

}

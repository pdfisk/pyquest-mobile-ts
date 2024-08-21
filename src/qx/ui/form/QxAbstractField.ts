import { FontConstants } from '../../../constants/FontConstants';
import { QxWidget } from '../core/QxWidget';

export abstract class QxAbstractField extends QxWidget {
    hasTextAppeared: boolean = false;
    initValue: string;

    constructor(widget: any) {
        super(widget);
        this.initValue = '';
    }

    clear() {
        this.setValue('');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getValue(): string {
        if (!this.widget)
            return '';
        let value = this.widget.getValue();
        if (typeof(value) !== 'string')
            value = '';
        return value;
    }

    initialize() {
        super.initialize();
        this.clear();
        this.setFontFamily(FontConstants.FontFamilyMonospace);
        this.setFontSize(FontConstants.FontSize24Px);
    }

    onAppear() {
        if (!this.hasAppeared) {
            super.onAppear();
            this.setFontSize(FontConstants.FontSize14Px);
            this.setFontFamily(FontConstants.FontFamilyMonospace);
            this.setValue(this.initValue);
            this.initValue = '';
        }
    }

    setValue(value: string) {
        if (this.hasAppeared)
            this.widget.setValue(value);
        else
            this.initValue = value;
    }

}

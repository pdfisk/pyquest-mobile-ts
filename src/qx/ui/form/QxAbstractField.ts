import { FontConstants } from '../../../constants/FontConstants';
import { QxWidget } from '../core/QxWidget';

export abstract class QxAbstractField extends QxWidget {
    hasAppeared: boolean = false;
    hasTextAppeared: boolean = false;
    initValue: string = '';

    constructor(widget: any) {
        super(widget);
        widget.addListener('appear', this.onTextFieldAppear, this);
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
        return this.widget.getValue();
    }

    initialize() {
        super.initialize();
        this.setFontFamily(FontConstants.FontFamilyMonospace);
        this.setFontSize(FontConstants.FontSize24Px);
    }

    onAppear() {
        if (!this.hasAppeared) {
            this.hasAppeared = true;
            this.setFontSize(FontConstants.FontSize14Px);
            this.setFontFamily(FontConstants.FontFamilyMonospace);
        }
    }

    onTextFieldAppear() {
        if (!this.hasTextAppeared) {
            this.hasTextAppeared = true;
            this.setValue(this.initValue);
            this.initValue = '';
        }
    }

    setValue(value: string) {
        if (this.hasTextAppeared)
            this.widget.setValue(value);
        else
            this.initValue = value;
    }

}

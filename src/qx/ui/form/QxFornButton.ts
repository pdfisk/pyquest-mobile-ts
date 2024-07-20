import { QxFactory } from '../../factory/QxFactory';
import { QxBasicAtom } from '../basic/QxBasicAtom';

export class QxFormButton extends QxBasicAtom {

    constructor(widget: any) {
        widget = widget ? widget : QxFactory.formButton();
        super(widget);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxBasicAtom } from '../basic/QxBasicAtom';

export class QxFormButton extends QxBasicAtom {

    static create(label: string, fn?: Function): QxFormButton {
        const button = new QxFormButton();
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }

    constructor(widget?: any) {
        widget = widget ? widget : QxFactory.formButton();
        super(widget);
    }

    setClickHandler(fn: Function) {
        this.widget.addListener('click', fn);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

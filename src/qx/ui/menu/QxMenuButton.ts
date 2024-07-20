import { QxFactory } from '../../factory/QxFactory';
import { QxMenuAbstractButton } from './QxMenuAbstractButton';

export class QxMenuButton extends QxMenuAbstractButton {

    static create(label: string, fn?: Function): QxMenuButton {
        const button = new QxMenuButton();
        button.setLabel(label);
        if (fn)
            button.setClickHandler(fn);
        return button;
    }

    constructor() {
        super(QxFactory.menuButton());
    }

    setClickHandler(fn: Function) {
        this.widget.addListener('execute', fn)
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

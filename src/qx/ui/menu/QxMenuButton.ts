import { QxFactory } from '../../factory/QxFactory';
import { QxMenuAbstractButton } from './QxMenuAbstractButton';

export class QxMenuButton extends QxMenuAbstractButton {

    static create(label: string): QxMenuButton {
        const button = new QxMenuButton();
        button.setLabel(label);
        return button;
    }

    constructor() {
        super(QxFactory.menuButton());
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

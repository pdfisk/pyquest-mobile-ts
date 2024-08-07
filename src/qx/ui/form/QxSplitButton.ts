import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxMenuButton } from '../menu/QxMenuButton';

export class QxSplitButton extends QxWidget {

    static create(label: string): QxSplitButton {
        const button = new QxSplitButton();
        button.setLabel(label);
        return button;
    }

    constructor() {
        super(QxFactory.menuSplitButton());
    }

    addMenuButton(label: string, fn: Function) {
        const button = QxMenuButton.create(label, fn);
        const menu: any = this.widget.getMenu();
        menu.add(button.widget);
        return button;
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

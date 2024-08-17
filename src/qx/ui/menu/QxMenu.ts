import { QxFactory } from '../../factory/QxFactory';
import { QxLayoutItem } from '../core/QxLayoutItem';
import { QxWidget } from '../core/QxWidget';
import { QxMenuButton } from './QxMenuButton';
import { QxMenuSeparator } from './QxMenuSeparator';

export class QxMenu extends QxWidget {

    constructor() {
        super(QxFactory.menuMenu());
    }

    add(item: QxLayoutItem) {
        if (!this.hasItem(item))
            this.widget.add(item.widget);
    }

    addButton(label: string, fn?: Function): QxMenuButton {
        const button: QxMenuButton = QxMenuButton.create(label, fn);
        this.add(button);
        return button;
    }

    addSeparator(): QxMenuSeparator {
        const separator: QxMenuSeparator = new QxMenuSeparator;
        this.add(separator);
        return separator;
    }

    hasItem(item: QxLayoutItem): boolean {
        return this.widget.getChildren().indexOf(item.widget) >= 0;
    }

    remove(item: QxLayoutItem) {
        if (this.hasItem(item))
            this.widget.remove(item.widget);
    }

}

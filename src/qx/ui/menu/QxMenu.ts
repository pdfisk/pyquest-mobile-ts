import { QxFactory } from '../../factory/QxFactory';
import { QxLayoutItem } from '../core/QxLayoutItem';
import { QxWidget } from '../core/QxWidget';
import { QxMenuButton } from './QxMenuButton';

export class QxMenu extends QxWidget {

    constructor() {
        super(QxFactory.menuMenu());
    }

    add(item: QxLayoutItem) {
        this.widget.add(item.widget);
    }

    addButton(label: string, fn?: Function) {
        const button: QxMenuButton = QxMenuButton.create(label, fn);
        (window as any).X = button;
        this.add(button);
    }

}

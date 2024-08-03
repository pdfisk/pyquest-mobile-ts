import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxListItem } from './QxListItem';

export class QxSelectBox extends QxWidget {

    constructor() {
        super(QxFactory.selectBox());
    }

    addItem(label: string) {
        this.addItemWidget(new QxListItem(label));
    }

    addItemWidget(item: QxListItem) {
        this.widget.add(item.widget);
    }

    clear() {
        this.widget.removeAll();
    }

    setItems(labels: string[]) {
        this.clear();
        labels.forEach((label: string) => { this.addItem(label) });
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxForm extends QxWidget {

    constructor() {
        super(QxFactory.form());
    }

    add(item: QxWidget, label: string) {
        this.widget.add(item.widget, label);
    }

}

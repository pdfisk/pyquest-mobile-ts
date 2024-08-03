import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxListItem extends QxWidget {

    constructor(label: string) {
        super(QxFactory.listItem());
        this.setLabel(label);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxMenuSeparator extends QxWidget {

    constructor() {
        super(QxFactory.menuSeparator());
    }

}

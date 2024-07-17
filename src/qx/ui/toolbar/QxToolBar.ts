import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxToolBar extends QxWidget {

    constructor() {
        super(QxFactory.toolbar());
    }

}

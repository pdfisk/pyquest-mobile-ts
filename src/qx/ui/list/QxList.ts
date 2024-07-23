import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxList extends QxWidget {

    constructor() {
        super(QxFactory.list());
    }

}

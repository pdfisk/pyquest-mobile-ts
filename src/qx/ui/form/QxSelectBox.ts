import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxSelectBox extends QxWidget {

    constructor() {
        super(QxFactory.selectBox());
    }

}

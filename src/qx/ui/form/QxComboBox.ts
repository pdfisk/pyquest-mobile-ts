import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxComboBox extends QxWidget {

    constructor() {
        super(QxFactory.comboBox());
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxAbstractField } from './QxAbstractField';

export class QxTextField extends QxAbstractField {

    constructor() {
        super(QxFactory.textField());
    }

}

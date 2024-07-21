import { QxFactory } from '../../factory/QxFactory';
import { QxAbstractField } from './QxAbstractField';

export class QxTextArea extends QxAbstractField {

    constructor() {
        super(QxFactory.textArea());
    }

}

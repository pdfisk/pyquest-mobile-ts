import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxHBoxLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.hboxLayout());
    }

}

import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxVBoxLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.vboxLayout());
    }

}

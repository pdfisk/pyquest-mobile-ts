import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxAtomLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.atomLayout());
    }

}

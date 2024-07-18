import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxFlowLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.flowLayout());
    }

}

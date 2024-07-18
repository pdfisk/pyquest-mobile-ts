import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxGridLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.gridLayout());
    }

}

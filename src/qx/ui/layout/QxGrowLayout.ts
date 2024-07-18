import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxGrowLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.growLayout());
    }

}

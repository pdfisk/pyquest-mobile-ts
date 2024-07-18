import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxBasicLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.basicLayout());
    }

}

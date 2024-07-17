import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxDockLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.dockLayout());
    }

}

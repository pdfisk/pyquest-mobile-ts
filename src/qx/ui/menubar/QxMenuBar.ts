import { QxFactory } from '../../factory/QxFactory';
import { QxToolBarToolBar } from '../toolbar/QxToolBarToolBar';

export class QxMenuBar extends QxToolBarToolBar {

    constructor() {
        super(QxFactory.menubarMenuBar());
    }

}

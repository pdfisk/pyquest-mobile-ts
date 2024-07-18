import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxToolBarToolBar extends QxWidget {

    constructor(widget?: any) {
        widget = widget ? widget : QxFactory.toolbarToolBar();
        super(widget);
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxFormMenuButton } from '../form/QxFormMenuButton';

export class QxMenuBarButton extends QxFormMenuButton {

    constructor() {
        super(QxFactory.menubarButton());
    }

}

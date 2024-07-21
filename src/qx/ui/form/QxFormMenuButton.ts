import { QxFactory } from '../../factory/QxFactory';
import { QxMenu } from '../menu/QxMenu';
import { QxFormButton } from './QxFormButton';

export class QxFormMenuButton extends QxFormButton {

    constructor(widget: any) {
        widget = widget ? widget : QxFactory.formMenuButton();
        super(widget);
    }

    setMenu(menu: QxMenu) {
        this.widget.setMenu(menu.widget);
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxFormButton } from './QxFornButton';

export class QxFormMenuButton extends QxFormButton {

    constructor(widget: any) {
        widget = widget ? widget : QxFactory.formMenuButton();
        super(widget);
    }

}

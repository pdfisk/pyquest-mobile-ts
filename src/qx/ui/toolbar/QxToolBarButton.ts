import { QxFactory } from '../../factory/QxFactory';
import { QxFormButton } from '../form/QxFormButton';

export class QxToolBarButton extends QxFormButton {

    constructor() {
        super(QxFactory.toolbarButton());
    }

}

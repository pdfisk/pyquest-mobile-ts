import { QxFactory } from '../../factory/QxFactory';
import { QxFormButton } from '../form/QxFornButton';

export class QxToolBarButton extends QxFormButton {

    constructor() {
        super(QxFactory.toolbarButton());
    }

}

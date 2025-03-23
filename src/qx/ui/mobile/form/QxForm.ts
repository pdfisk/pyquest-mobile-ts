import { QxFactory } from '../../../factory/QxFactory';
import { QxAbstractForm } from "../../form/QxAbstractForm";

export class QxForm extends QxAbstractForm {

    constructor() {
        super(QxFactory.mobileForm());
    }

}

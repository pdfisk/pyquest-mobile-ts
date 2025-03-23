import { QxFactory } from '../../../factory/QxFactory';
import { QxAbstractLayout } from "./QxAbstractLayout";

export class QxCardLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.mobileCard());
    }

}

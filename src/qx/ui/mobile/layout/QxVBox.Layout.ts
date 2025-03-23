import { QxFactory } from '../../../factory/QxFactory';
import { QxAbstractBox } from "./QxAbstractBox";

export class QxVBoxLayout extends QxAbstractBox {

    constructor() {
        super(QxFactory.mobileVBox());
    }

}

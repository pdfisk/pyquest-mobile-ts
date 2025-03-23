import { QxFactory } from '../../../factory/QxFactory';
import { QxAbstractBox } from "./QxAbstractBox";

export class QxHBoxLayout extends QxAbstractBox {

    constructor() {
        super(QxFactory.mobileHBox());
    }

}

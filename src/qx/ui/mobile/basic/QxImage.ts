import { QxFactory } from '../../../factory/QxFactory';
import { QxWidget } from "../core/QxWidget";

export class QxImage extends QxWidget {

    constructor(path: string) {
        super(QxFactory.mobileImage(path));
    }

}

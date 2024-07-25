import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicImage extends QxWidget {

    constructor() {
        super(QxFactory.basicImage());
    }

}

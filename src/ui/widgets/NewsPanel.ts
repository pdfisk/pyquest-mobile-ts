import { ColorConstants, StyleConstants } from "../../constants";
import { QxScroll } from "../../qx/ui/mobile/container/QxScroll";

export class NewsPanel extends QxScroll {

    constructor() {
        super();
        this.setBorderPx(ColorConstants.ColorGray, StyleConstants.BorderRadius15);
     }

}

import { ColorConstants, StyleConstants } from "../../../../constants";
import { QxScroll } from "../../../../qx/ui/mobile/container/QxScroll";
import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";

export class NewsPanel extends QxScroll {

    constructor() {
        super();
        this.setBorderPx(ColorConstants.ColorGray, StyleConstants.BorderRadius15);
        const itemsPanel = new QxVBox;
        this.add(itemsPanel);
        itemsPanel.setBackgroundColor('red');
    }

}

import { ColorConstants } from '../../../../constants/ColorConstants';
import { StyleConstants } from '../../../../constants/StyleConstants';
import { QxScroll } from "../../../../qx/ui/mobile/container/QxScroll";
import { InfoItemsPanel } from "./InfoItemsPanel";

export class InfoScrollPanel extends QxScroll {

    constructor() {
        super();
        this.setBorderPx(ColorConstants.ColorGray, StyleConstants.BorderRadius15);
        const itemsPanel = new InfoItemsPanel;
        this.add(itemsPanel);
        itemsPanel.show();
    }

}

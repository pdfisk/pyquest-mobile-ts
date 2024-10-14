import { SizeConstants } from "../../../../constants";
import { QxHtml } from "../../../../qx/ui/mobile/embed/QxHtml";

export class InfoScrollItem extends QxHtml {

    constructor() {
        super();
        this.setHtml('<h3>News Item</h3>')
        this.setBorderBottomPx();
        this.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
    }

}

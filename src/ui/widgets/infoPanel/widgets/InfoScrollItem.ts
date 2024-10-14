import { SizeConstants } from "../../../../constants";
import { QxHtml } from "../../../../qx/ui/mobile/embed/QxHtml";
import { StringWriter } from "../../../../util/StringWriter";

export class InfoScrollItem extends QxHtml {

    constructor(itemData: string[]) {
        super();
        this.setHtml(this.createHtml(itemData));
        this.setPaddingLeftAndRightPx(SizeConstants.InfoItemLeftAndRightPadding);
        this.setPaddingTopAndBottomPx(SizeConstants.InfoItemTopAndBottomPadding);
        this.setBorderBottomPx();
        this.setMarginBottomPx(SizeConstants.InfoPanelBottomMargin);
    }

    createHtml(itemData: string[]): string {
        if (itemData.length == 0)
            itemData.push('-- no data --');
        const sw = new StringWriter;
        sw.prn(`<h3>${itemData.shift()}</h3>`);
        while (itemData.length > 0) {
            sw.prn(`<p>${itemData.shift()}</p>`)
        }
        return sw.asString();
    }

}

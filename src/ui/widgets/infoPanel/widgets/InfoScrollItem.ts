import { SizeConstants } from "../../../../constants";
import { QxHtml } from "../../../../qx/ui/mobile/embed/QxHtml";
import { StringWriter } from "../../../../util/StringWriter";

export class InfoScrollItem extends QxHtml {

    constructor(itemData: string[]) {
        super();
        this.setHeightAuto();
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
        this.createHtmlTitle(sw, `${itemData.shift()}`);
        while (itemData.length > 0)
            this.createHtmlParagraph(sw, `${itemData.shift()}`);
        return sw.asString();
    }

    createHtmlParagraph(sw: StringWriter, paragraph: string) {
        sw.prn_p(paragraph);
    }

    createHtmlTitle(sw: StringWriter, title: string) {
        sw.prn_h5(title);
    }

}

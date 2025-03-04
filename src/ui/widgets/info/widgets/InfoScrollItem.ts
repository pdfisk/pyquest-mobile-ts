import { SizeConstants, StyleConstants, TextConstants } from "../../../../constants";
import { QxHtml } from "../../../../qx/ui/mobile/embed/QxHtml";
import { HtmlStringWriter } from "../../../../util/HtmlStringWriter";

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
        const sw = new HtmlStringWriter;
        this.createHtmlTitle(sw, `${itemData.shift()}`);
        while (itemData.length > 0)
            this.createHtmlParagraph(sw, `${itemData.shift()}`);
        return sw.asString();
    }

    createHtmlParagraph(sw: HtmlStringWriter, paragraph: string) {
        sw.prn_p(paragraph);
    }

    createHtmlTitle(sw: HtmlStringWriter, titleAndAttributes: string) {
        const parts = titleAndAttributes.split(TextConstants.DOUBLE_COLON);
        const title = parts[0];
        const attributes: string[] = parts.length > 1 ? parts[1].split(',') : [];
        if (attributes.length > 0 && attributes[0].startsWith(StyleConstants.AttributeHref)) {
            sw.openTagA(attributes);
            sw.pr_h5(title);
            sw.closeTagA();
            sw.newline();
        }
        else
            sw.prn_h5(title, attributes);
    }

}

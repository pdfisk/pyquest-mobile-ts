import { FontConstants } from "../../constants/FontConstants";
import { QxFactory } from "../factory/QxFactory";
import { QxWidget } from "../ui/core/QxWidget";

export class QxHtml extends QxWidget {

    constructor() {
        super(QxFactory.embedHtml());
    }

    clear() {
        this.setHtml('');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getHtml(): string {
        return this.widget.getHtml();
    }

    onAppear() {
        this.setFontSize(FontConstants.FontSize14Px);
        this.setFontFamily(FontConstants.FontFamilyMonospace);
    }

    setHtml(html: string) {
        this.widget.setHtml(html);
    }

}

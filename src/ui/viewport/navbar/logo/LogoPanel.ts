import { FontConstants } from "../../../../constants/FontConstants";
import { SizeConstants } from "../../../../constants/SizeConstants";
import { QxHtml } from "../../../../qx/embed/QxHtml";

export class LogoPanel extends QxHtml {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setPaddingTop(5);
        this.setMarginLeft(10);
        this.setMarginRight(15);
        this.setHtml('PYQUEST');
        this.setWidth(SizeConstants.LogoPanelWidth);
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    onAppear() {
        super.onAppear();
        this.setFontFamily(FontConstants.FontFamilyBruno);
        this.setFontSize(FontConstants.FontSize18Px);
    }

}

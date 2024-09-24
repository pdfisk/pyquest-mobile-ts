import { ColorConstants, SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { QxButton } from "../../qx/mobile/form/QxButton";

export class ButtonBar extends QxHBox {

    constructor() {
        super();
        this.setHeightPx(SizeConstants.ButtonBarHeight);
    }

    addButton(label: string, fn?: Function) {
        const button: QxButton = new QxButton(label, fn);
        button.setHeightPx(SizeConstants.ButtonBarButtonHeight);
        this.add(button);
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.ButtonBarBackground);
        this.setPaddingBottomPx(SizeConstants.ButtonBarPaddingBottom);
        this.setPaddingLeftPx(SizeConstants.ButtonBarPaddingLeft);
        this.setPaddingRightPx(SizeConstants.ButtonBarPaddingRight);
        this.setPaddingTopPx(SizeConstants.ButtonBarPaddingTop);
    }

}

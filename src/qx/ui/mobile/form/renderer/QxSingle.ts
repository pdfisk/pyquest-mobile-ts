import { ColorConstants, SizeConstants, StyleConstants } from "../../../../../constants";
import { StringUtil } from "../../../../../util/StringUtil";
import { QxFactory } from "../../../../factory/QxFactory";
import { QxWidget } from "../../core/QxWidget";
import { QxForm } from "../QxForm";
import { QxAbstractRenderer } from "./QxAbstractRenderer";

export class QxSingle extends QxAbstractRenderer {

    constructor(form: QxForm) {
        super(QxFactory.mobileSingle(form.widget));
    }

    addItems(items: QxWidget[], names: string[]) {
        const widgets: any[] = [];
        items.forEach((item) => {
            widgets.push(item.widget);
        });
        this.widget.addItems(widgets, names);
     }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        super.onAppear();
        const rows = this.widget._getChildren();
        for (let i = 3; i < rows.length-1; i += 2) {
            const row = rows[i];
            row._setStyle(StyleConstants.Height, StringUtil.asPixels(SizeConstants.LoginPanelSpacingY));
            row._setStyle(StyleConstants.BackgroundColor, ColorConstants.ColorWhite);
        }
    }

}

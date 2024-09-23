import { SizeConstants, StyleConstants } from "../../../constants";
import { StringUtil } from "../../../util/StringUtil";
import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export class QxWidget extends QxObject {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
        this.setHeight(SizeConstants.Size100Pct);
    }

    initialize() {
        super.initialize();
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setBorderTopPx(color: string, height: number) {
        const borderTop = `${StringUtil.asPixels(height)} solid ${color}`;
        this.setStyle(StyleConstants.BorderTop, borderTop);
    }

    setHeight(height: string) {
        this.setStyle(StyleConstants.Height, height);
    }

    setHeightPx(height: number) {
        this.setHeight(`${height}px`);
    }

    setMarginTopPx(height: number) {
        const marginTop = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginTop, marginTop);
    }

    setStyle(key: string, value: any) {
        if (this.widget._setStyle) {
            this.widget._setStyle(key, value);
        }
    }

    setWidth(width: string) {
        this.setStyle(StyleConstants.Width, width);
    }

}

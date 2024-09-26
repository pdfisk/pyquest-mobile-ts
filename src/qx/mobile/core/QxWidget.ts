import { EventConstants, SizeConstants, StyleConstants } from "../../../constants";
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
        if (this.handlesOnAppear())
            this.widget.addListenerOnce(EventConstants.QxEventAppear, this.onAppear, this);
    }

    getHeight(): any {
        return this.getStyle(StyleConstants.Height);
    }

    getStyle(key: string): any {
        if (this.widget._getStyle)
            return this.widget._getStyle(key);
        return '---';
    }

    handlesOnAppear(): boolean {
        return false;
    }

    onAppear() {
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setBorderPx(color: string, height: number) {
        const border = `${StringUtil.asPixels(height)} solid ${color}`;
        this.setStyle(StyleConstants.Border, border);
    }

    setBorderTopPx(color: string, height: number) {
        const borderTop = `${StringUtil.asPixels(height)} solid ${color}`;
        this.setStyle(StyleConstants.BorderTop, borderTop);
    }

    setHeight(height: string) {
        this.setStyle(StyleConstants.Height, height);
    }

    setHeightPx(height: number) {
        this.setHeight(StringUtil.asPixels(height));
    }

    setMarginBottomPx(height: number) {
        const marginBottom = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginBottom, marginBottom);
    }

    setMarginLeftPx(height: number) {
        const marginLeft = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginLeft, marginLeft);
    }

    setMarginRightPx(height: number) {
        const marginRight = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginRight, marginRight);
    }

    setMarginTopPx(height: number) {
        const marginTop = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginTop, marginTop);
    }

    setPaddingBottomPx(padding: number) {
        const paddingBottom = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingBottom, paddingBottom);
    }

    setPaddingLeftPx(padding: number) {
        const paddingLeft = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingLeft, paddingLeft);
    }

    setPaddingRightPx(padding: number) {
        const paddingRight = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingRight, paddingRight);
    }

    setPaddingTopPx(padding: number) {
        const paddingTop = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingTop, paddingTop);
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

import { ColorConstants, EventConstants, SizeConstants, StyleConstants } from "../../../../constants";
import { QxWidgetUtil } from "../../../../util";
import { StringUtil } from "../../../../util/StringUtil";
import { QxObject } from "../../../core";
import { QxFactory } from "../../../factory";

export class QxWidget extends QxObject {
    hasAppeared: boolean = false;

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
        this.setHeight(SizeConstants.Size100Pct);
    }

    addCssClass(cssClass: string) {
        this.widget.addCssClass(cssClass);
    }

    addListener(eventName: string, fn: Function, context: any = this) {
        this.widget.addListener(eventName, fn, context);
    }

    addListenerOnce(eventName: string, fn?: Function, context: any = this) {
        this.widget.addListenerOnce(eventName, fn, context);
    }

    initialize() {
        super.initialize();
        if (this.handlesOnAppear())
            this.widget.addListener(EventConstants.QxEventAppear, this.onAppear, this);
        if (this.handlesOnClick())
            this.widget.addListener(EventConstants.QxEventClick, this.onClick, this);
        if (this.handlesOnTap())
            this.widget.addListener(EventConstants.QxEventTap, this.onTap, this);
    }

    getBoundingHeight(): number {
        return this.getBoundingRect().height;
    }

    getBoundingRect(): any {
        return this.widget.getContentElement().getBoundingClientRect();
    }

    getBoundingWidth(): number {
        return this.getBoundingRect().width;
    }

    getEnabled(): boolean {
        return this.widget.getEnabled();
    }

    getHeight(): string {
        return this.getStyle(StyleConstants.Height);
    }

    getLayoutParentWidget(): QxWidget | null {
        const parentQxWidget = this.widget.getLayoutParent();
        if (!parentQxWidget)
            return null;
        return QxWidgetUtil.getTypeScriptWidget(parentQxWidget);
    }

    getStyle(key: string): any {
        if (this.widget._getStyle)
            return this.widget._getStyle(key);
        return '---';
    }

    getWidth(): string {
        return this.getStyle(StyleConstants.Width);
    }

    handlesOnAppear(): boolean {
        return false;
    }

    handlesOnClick(): boolean {
        return false;
    }

    handlesOnTap(): boolean {
        return false;
    }

    onAppear() {
        this.hasAppeared = true;
    }

    onClick() {
    }

    onTap(arg?: string) {
    }

    resetHeight() {
        this.setHeight(undefined);
    }

    setActivatable(value: boolean) {
        this.widget.setActivatable(value);
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setBorderBottomPx(color: string = ColorConstants.ColorGray, width: number = 1) {
        const border = `${StringUtil.asPixels(width)} solid ${color}`;
        this.setStyle(StyleConstants.BorderBottom, border);
    }

    setBorderPx(color: string, borderRadius: number = -1, width: number = 1) {
        const border = `${StringUtil.asPixels(width)} solid ${color}`;
        this.setStyle(StyleConstants.Border, border);
        if (borderRadius > 0)
            this.setBorderRadiusPx(borderRadius);
    }

    setBorderRadiusPx(radius: number) {
        this.setStyle(StyleConstants.BorderRadius, StringUtil.asPixels(radius));
    }

    setBorderTopPx(color: string, width: number) {
        const borderTop = `${StringUtil.asPixels(width)} solid ${color}`;
        this.setStyle(StyleConstants.BorderTop, borderTop);
    }

    setEnabled(value: boolean) {
        this.widget.setEnabled(value);
    }

    setFontSize(size: string | undefined) {
        this.setStyle(StyleConstants.FontSize, size);
    }

    setFontSizePx(size: number) {
        this.setFontSize(StringUtil.asPixels(size));
    }

    setFontWeight(weight: string | undefined) {
        this.setStyle(StyleConstants.FontWeight, weight);
    }

    setFontStyleItalic() {
        this.setStyle(StyleConstants.FontStyle, StyleConstants.Italic);
    }

    setFontWeightBold() {
        this.setStyle(StyleConstants.FontWeight, StyleConstants.FontWeightBold);
    }

    setHeight(height: string | undefined) {
        this.setStyle(StyleConstants.Height, height);
    }

    setHeightAuto() {
        this.setHeight(StyleConstants.Auto);
    }

    setHeightPx(height: number) {
        this.setHeight(StringUtil.asPixels(height));
    }

    setLineHeight(height: string) {
        this.setStyle(StyleConstants.LineHeight, height);
    }

    setLineHeightPx(height: number) {
        this.setLineHeight(StringUtil.asPixels(height));
    }

    setMarginBottomPx(height: number) {
        const marginBottom = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginBottom, marginBottom);
    }

    setMarginLeftPx(width: number) {
        const marginLeft = StringUtil.asPixels(width);
        this.setStyle(StyleConstants.MarginLeft, marginLeft);
    }

    setMarginLeftAndRightPx(width: number) {
        this.setMarginLeftPx(width);
        this.setMarginRightPx(width);
    }

    setMarginRightPx(width: number) {
        const marginRight = StringUtil.asPixels(width);
        this.setStyle(StyleConstants.MarginRight, marginRight);
    }

    setMarginTopPx(height: number) {
        const marginTop = StringUtil.asPixels(height);
        this.setStyle(StyleConstants.MarginTop, marginTop);
    }

    setMarginTopAndBottomPx(height: number) {
        this.setMarginTopPx(height);
        this.setMarginBottomPx(height);
    }

    setMaxHeight(height: string | undefined) {
        this.setStyle(StyleConstants.MaxHeight, height);
    }

    setMaxHeightPx(height: number) {
        this.setMaxHeight(StringUtil.asPixels(height));
    }

    setMaxWidth(width: string | undefined) {
        this.setStyle(StyleConstants.MaxWidth, width);
    }

    setMaxWidthPx(width: number) {
        this.setMaxWidth(StringUtil.asPixels(width));
    }

    setMinHeight(height: string | undefined) {
        this.setStyle(StyleConstants.MinHeight, height);
    }

    setMinWidth(width: string | undefined) {
        this.setStyle(StyleConstants.MinWidth, width);
    }

    setPaddingBottomPx(padding: number) {
        const paddingBottom = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingBottom, paddingBottom);
    }

    setPaddingLeftPx(padding: number) {
        const paddingLeft = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingLeft, paddingLeft);
    }

    setPaddingLeftAndRightPx(width: number) {
        this.setPaddingLeftPx(width);
        this.setPaddingRightPx(width);
    }

    setPaddingRightPx(padding: number) {
        const paddingRight = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingRight, paddingRight);
    }

    setPaddingTopPx(padding: number) {
        const paddingTop = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingTop, paddingTop);
    }

    setPaddingTopAndBottomPx(width: number) {
        this.setPaddingTopPx(width);
        this.setPaddingBottomPx(width);
    }

    setStyle(key: string, value: any) {
        if (this.widget && this.widget._setStyle)
            this.widget._setStyle(key, value);
    }

    setWidth(width: string | undefined) {
        this.setStyle(StyleConstants.Width, width);
    }

    setWidthPx(width: number) {
        this.setWidth(StringUtil.asPixels(width));
    }

}

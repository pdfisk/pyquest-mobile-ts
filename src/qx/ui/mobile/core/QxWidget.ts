import { EventConstants, SizeConstants, StyleConstants } from "../../../../constants";
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

    addListener(eventName: string, fn: Function, context: any = this) {
        this.widget.addListener(eventName, fn, context);
    }

    addListenerOnce(eventName: string, fn?: Function, context: any = this) {
        this.widget.addListenerOnce(eventName, fn, context);
    }

    initialize() {
        super.initialize();
        if (this.handlesOnAppear())
            this.widget.addListenerOnce(EventConstants.QxEventAppear, this.onAppear, this);
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

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setBorderPx(color: string, width: number = 1) {
        const border = `${StringUtil.asPixels(width)} solid ${color}`;
        this.setStyle(StyleConstants.Border, border);
    }

    setBorderTopPx(color: string, width: number) {
        const borderTop = `${StringUtil.asPixels(width)} solid ${color}`;
        this.setStyle(StyleConstants.BorderTop, borderTop);
    }

    setHeight(height: string | undefined) {
        this.setStyle(StyleConstants.Height, height);
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

    setPaddingRightPx(padding: number) {
        const paddingRight = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingRight, paddingRight);
    }

    setPaddingTopPx(padding: number) {
        const paddingTop = StringUtil.asPixels(padding);
        this.setStyle(StyleConstants.PaddingTop, paddingTop);
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

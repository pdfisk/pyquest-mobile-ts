import { StyleConstants } from '../../../constants/StyleConstants';
import { QxElement } from '../../html/QxElement';
import { QxLayoutItem } from './QxLayoutItem';

export abstract class QxWidget extends QxLayoutItem {
    contentElement: any = undefined;
    hasAppeared: boolean = false;

    constructor(widget: any) {
        super(widget);
        if (this.defaultEnableOnAppear())
            this.enableOnAppear();
        if (this.defaultEnableOnResize())
            this.enableOnResize();
    }

    defaultEnableOnAppear(): boolean {
        return false;
    }

    defaultEnableOnResize(): boolean {
        return false;
    }

    enableOnAppear() {
        this.widget.addListener('appear', this.onAppear, this);
    }

    enableOnResize() {
        this.widget.addListener('resize', this.onResize, this);
    }

    getBounds(): any {
        return this.widget.getBounds();
    }

    getBoundsHeight(): number {
        return this.getBounds().height;
    }

    getBoundsWidth(): number {
        return this.getBounds().width;
    }

    getContentElement(): QxElement {
        if (this.contentElement === undefined)
            this.contentElement = new QxElement(this.widget.getContentElement());
        return this.contentElement;
    }

    getEnabled(): boolean {
        return this.widget.getEnabled();
    }

    hide() {
        this.widget.hide();
    }

    onAppear() {
        this.hasAppeared = true;
    }

    onResize() {
    }

    setAlignX(align: string) {
        this.widget.setAlignX(align);
    }

    setAlignY(align: string) {
        this.widget.setAlignY(align);
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setEnabled(value: boolean): QxWidget {
        this.widget.setEnabled(value);
        return this;
    }

    setFontFamily(fontFamily: string) {
        this.setStyle(StyleConstants.FontFamily, fontFamily);
    }

    setFontSize(fontSize: string) {
        this.setStyle(StyleConstants.FontSize, fontSize);
    }

    setHeight(height: number) {
        this.widget.setHeight(height);
    }

    setLeft(left: number) {
        this.widget.setDomLeft(left);
    }

    setMargin(margin: number[]) {
        this.widget.setMargin.apply(this.widget, margin);
    }

    setMarginAll(margin: number) {
        this.widget.setMargin(margin);
    }

    setMarginBottom(margin: number) {
        this.widget.setMarginBotton(margin);
    }

    setMarginLeft(margin: number) {
        this.widget.setMarginLeft(margin);
    }

    setMarginRight(margin: number) {
        this.widget.setMarginRight(margin);
    }

    setMarginTop(margin: number) {
        this.widget.setMarginTop(margin);
    }

    setMaxHeight(height: number) {
        this.widget.setMaxHeight(height);
    }

    setMaxWidth(width: number) {
        this.widget.setMaxWidth(width);
    }

    setObjectFit(fit: string) {
        this.setStyle(StyleConstants.ObjectFit, fit);
    }

    setObjectFitCover() {
        this.setObjectFit(StyleConstants.ObjectFitCover);
    }

    setPadding(padding: number[]) {
        this.widget.setPadding.apply(this.widget, padding);
    }

    setPaddingAll(padding: number) {
        this.widget.setPadding(padding);
    }

    setPaddingBottom(padding: number) {
        this.widget.setPaddingBotton(padding);
    }

    setPaddingLeft(padding: number) {
        this.widget.setPaddingLeft(padding);
    }

    setPaddingRight(padding: number) {
        this.widget.setPaddingRight(padding);
    }

    setPaddingTop(padding: number) {
        this.widget.setPaddingTop(padding);
    }

    setStyle(key: string, value: any) {
        this.getContentElement().setStyle(key, value);
    }

    setTop(top: number) {
        this.widget.setDomTop(top);
    }

    setWidth(width: number) {
        this.widget.setWidth(width);
    }

    show() {
        this.widget.show();
    }

}

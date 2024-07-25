import { QxElement } from '../../html/QxElement';
import { QxLayoutItem } from './QxLayoutItem';
import { StyleConstants } from '../../../constants/StyleConstants';

export abstract class QxWidget extends QxLayoutItem {
    contentElement: any = undefined;

    constructor(widget: any) {
        super(widget);
        if (this.defaultEnableOnAppear())
            this.enableOnAppear();
    }

    defaultEnableOnAppear(): boolean {
        return false;
    }

    enableOnAppear() {
        this.widget.addListener('appear', this.onAppear, this);
    }

    getContentElement(): QxElement {
        if (this.contentElement === undefined)
            this.contentElement = new QxElement(this.widget.getContentElement());
        return this.contentElement;
    }

    hide() {
        this.widget.hide();
    }

    onAppear() {
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setFontFamily(fontFamily: string) {
        this.setStyle('fontFamily', fontFamily);
    }

    setFontSize(fontSize: string) {
        this.setStyle('fontSize', fontSize);
    }

    setHeight(height: number) {
        this.widget.setHeight(height);
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

    setWidth(width: number) {
        this.widget.setWidth(width);
    }

    show() {
        this.widget.show();
    }

}

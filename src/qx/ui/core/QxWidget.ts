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

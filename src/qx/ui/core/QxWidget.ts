import { QxElement } from '../../html/QxElement';
import { QxLayoutItem } from './QxLayoutItem';
import { StyleConstants } from '../../../constants/StyleConstants';

export abstract class QxWidget extends QxLayoutItem {
    contentElement: any = undefined;

    constructor(widget: any) {
        super(widget);
    }

    getContentElement(): QxElement {
        if (this.contentElement === undefined)
            this.contentElement = new QxElement(this.widget.getContentElement());
        return this.contentElement;
    }

    setBackgroundColor(color: string) {
        this.setStyle(StyleConstants.BackgroundColor, color);
    }

    setHeight(height: number) {
        this.widget.setHeight(height);
    }

    setStyle(key: string, value: any) {
        this.getContentElement().setStyle(key, value);
    }

    setWidth(width: number) {
        this.widget.setWidget(width);
    }

}

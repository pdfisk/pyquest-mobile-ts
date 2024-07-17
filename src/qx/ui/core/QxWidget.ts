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

    setStyle(key: string, value: any) {
        this.getContentElement().setStyle(key, value);
    }

}

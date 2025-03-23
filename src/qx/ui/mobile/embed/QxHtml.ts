import { QxFactory } from '../../../factory/QxFactory';
import { QxWidget } from "../core/QxWidget";

export class QxHtml extends QxWidget {

    constructor() {
        super(QxFactory.mobileHtml());
    }

    getHtml(): string {
        return this.widget.getHtml();
    }

    setHtml(html: string) {
        this.widget.setHtml(html);
    }

}

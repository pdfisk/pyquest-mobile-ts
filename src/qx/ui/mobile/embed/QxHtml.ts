import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxHtml extends QxWidget {

    constructor() {
        super(QxFactory.mobileHtml());
    }

    getHtml(): string {
        return this.widget.getHtml();
    }

    setHtml(html: string) {
        (window as any).X = html;
        this.widget.setHtml(html);
    }

}

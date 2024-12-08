import { QxFactory } from "../../factory";
import { QxWidget } from "../mobile/core/QxWidget";

export class QxIframe extends QxWidget {

    constructor() {
        super(QxFactory.htmlIframe());
    }

    getHtml(): string {
        return 'HTML';
    }

    setHtml(html: string) {
        this.widget.getDocument().write(html);
    }

}

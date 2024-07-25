import { QxFactory } from "../factory/QxFactory";
import { QxWidget } from "../ui/core/QxWidget";

export class QxHtml extends QxWidget {

    constructor() {
        super(QxFactory.embedHtml());
    }

    setHtml(html: string) {
        this.widget.setHtml(html);
    }

}

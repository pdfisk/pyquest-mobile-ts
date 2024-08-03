import { QxHtml } from '../../qx/embed/QxHtml';
import { AbstractPanel } from './AbstractPanel';

export class HtmlPanel extends AbstractPanel {
    html: QxHtml;

    constructor() {
        super();
        this.html = new QxHtml();
        this.addCenter(this.html);
    }

    clear() {
        this.html.clear();
    }

    getValue(): string {
        return this.html.getHtml();
    }

    setValue(html: string) {
        this.html.setHtml(html);
    }

}

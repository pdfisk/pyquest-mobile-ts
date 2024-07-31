import { QxHtml } from '../../qx/embed/QxHtml';
import { Panel } from './Panel';

export class HtmlPanel extends Panel {
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

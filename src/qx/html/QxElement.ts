import { QxNode } from './QxNode';

export class QxElement extends QxNode {

    constructor(widget: any) {
        super(widget);
    }

    setStyle(key: string, value: any) {
        this.widget.setStyle(key, value);
    }

}

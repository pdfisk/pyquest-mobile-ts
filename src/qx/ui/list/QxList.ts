import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxList extends QxWidget {

    constructor() {
        super(QxFactory.list());
    }

    setData(labels: string[]) {
        const model = (window.qx as any).data.marshal.Json.createModel(labels.sort());
        this.widget.setModel(model);
    }

}

import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxList extends QxWidget {
    changeHandlerFn?: Function;

    constructor() {
        super(QxFactory.list());
        this.widget.getSelection().addListener('change', this.onChange, this);
    }

    onChange() {
        const selection:any = this.widget.getSelection();
        if (selection && selection.length) {
            const name = selection.getItem(0);
            if (this.changeHandlerFn)
                this.changeHandlerFn(name);
        }
    }

    refresh() {
        this.widget.refresh();
    }

    setChangeHandlerFn(fn: Function) {
        this.changeHandlerFn = fn;
    }

    setData(labels: string[]) {
        const model = (window.qx as any).data.marshal.Json.createModel(labels.sort());
        this.widget.setModel(model);
    }

}

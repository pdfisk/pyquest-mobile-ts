import { EventConstants } from '../../../../constants/EventConstants';
import { QxFactory } from '../../../factory/QxFactory';
import { QxWidget } from "../core/QxWidget";

export class QxSelectBox extends QxWidget {

    constructor(items: string[] = [], fn: Function | null = null) {
        super(QxFactory.mobileSelectBox());
        this.setModel(items);
        if (fn)
            this.setChangeFunction(fn)
    }

    getSelection(): number {
        return this.widget.getSelection();
    }

    getValue(): string {
        return this.widget.getValue();
    }

    setChangeFunction(fn: Function) {
        this.addListener(EventConstants.QxEventChangeSelection, fn, this);
    }

    setModel(items: string[]) {
        const model = new (window as any).qx.data.Array(items);
        this.widget.setModel(model);
    }

    setPlaceholder(text: string) {
        this.widget.setPlaceholder(text);
    }

    setSelection(index: number) {
        this.widget.setSelection(index);
    }

}

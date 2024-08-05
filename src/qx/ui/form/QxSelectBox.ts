import { LabelConstants } from '../../../constants/LabelConstants';
import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxListItem } from './QxListItem';

export class QxSelectBox extends QxWidget {
    changeHandlerFn: any;

    constructor() {
        super(QxFactory.selectBox());
        this.widget.addListener('changeSelection', this.onChangeSelection, this);
    }

    addItem(label: string) {
        this.addItemWidget(new QxListItem(label));
    }

    addItemWidget(item: QxListItem) {
        this.widget.add(item.widget);
    }

    clear() {
        this.widget.removeAll();
    }

    getSelectedLabel(): string {
        const selection: any = this.widget.getSelection();
        if (selection && selection.length)
            return selection[0].getLabel();
        return '';
    }

    onChangeSelection() {
        if (typeof (this.changeHandlerFn) === 'function')
            (this.changeHandlerFn as Function).call(this);
    }

    setChangeHandlerFn(changeHandlerFn: Function) {
        this.changeHandlerFn = changeHandlerFn;
    }

    setItems(labels: string[]) {
        this.clear();
        labels.forEach((label: string) => { this.addItem(label) });
    }

}

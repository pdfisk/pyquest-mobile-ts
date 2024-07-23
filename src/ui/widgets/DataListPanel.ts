import { AbstractStore } from '../../data/stores/AbstractStore';
import { QxList } from '../../qx/ui/list/QxList';
import { Panel } from './Panel';

export abstract class DataListPanel extends Panel {
    dataStore?: AbstractStore;
    list: QxList;

    constructor() {
        super();
        this.list = new QxList();
        this.addCenter(this.list);
        this.setStore();
        this.addHandlerFns();
    }

    addHandlerFn(fn: Function) {
        this.dataStore?.addHandlerFn(fn);
    }

    abstract addHandlerFns(): void;

    onAppear() {
        this.dataStore?.loadData();
    }

    abstract setStore(): void;

}

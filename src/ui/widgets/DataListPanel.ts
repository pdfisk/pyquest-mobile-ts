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
        this.addChangeHandlerFns();
        this.addLoadHandlerFns();
    }

    addChangeHandlerFn(fn: Function) {
        this.list.setChangeHandlerFn(fn);
    }

    abstract addChangeHandlerFns(): void;

    addLoadHandlerFn(fn: Function) {
        this.dataStore?.addLoaderHandlerFn(fn);
    }

    abstract addLoadHandlerFns(): void;

    onAppear() {
        this.dataStore?.loadData();
    }

    abstract setStore(): void;

    updateList(names: any[]) {
        this.list.setData(names);
    }

}

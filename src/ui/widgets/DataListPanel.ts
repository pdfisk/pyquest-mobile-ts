import { AbstractStore } from '../../data/stores/AbstractStore';
import { Panel } from './Panel';

export abstract class DataListPanel extends Panel {
    dataStore?: AbstractStore;

    constructor() {
        super();
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

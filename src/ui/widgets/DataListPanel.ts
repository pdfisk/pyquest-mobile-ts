import { AbstractStore } from '../../data/stores/AbstractStore';
import { Panel } from './Panel';

export abstract class DataListPanel extends Panel {
    dataStore?: AbstractStore;

    constructor() {
        super();
        this.setStore();
    }

    abstract setStore(): void;

}

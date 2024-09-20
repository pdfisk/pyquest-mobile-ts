import { AbstractStore } from "../../data";
import { AbstractPage } from "./AbstractPage";

export abstract class DataListPage extends AbstractPage {
    dataStore: AbstractStore;

    constructor() {
        super();
        this.dataStore = this.getStore();
        this.addLoadHandlerFns();
    }

    abstract addLoadHandlerFns(): void;

    abstract getStore(): AbstractStore;

    onAppear() {
        super.onAppear();
        this.dataStore.loadData();
    }

}

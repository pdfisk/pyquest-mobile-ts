import { AbstractStore } from "../../data";
import { QxScroll } from "../../qx/mobile/container/QxScroll";
import { QxList } from "../../qx/mobile/list/QxList";
import { AbstractPage } from "./AbstractPage";

export abstract class DataListPage extends AbstractPage {
    dataStore: AbstractStore;
    list: QxList;
    scroll: QxScroll;

    constructor() {
        super();
        this.dataStore = this.getStore();
        this.list = new QxList(this.getListConfig());
        this.scroll = new QxScroll();
        this.addLoadHandlerFns();
    }

    addContent() {
        this.scroll.add(this.list);
        this.widget.getContent().add(this.scroll.widget);
    }

    abstract addLoadHandlerFns(): void;

    abstract getListConfig(): any;

    abstract getStore(): AbstractStore;

    onAppear() {
        super.onAppear();
        this.dataStore.loadData();
    }

}

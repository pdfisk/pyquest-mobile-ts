import { AbstractStore } from "../../data";
import { QxScroll } from "../../qx/mobile/container/QxScroll";
import { QxList } from "../../qx/mobile/list/QxList";
import { AbstractPage } from "./AbstractPage";

export abstract class DataListPage extends AbstractPage {
    dataMap: Map<string, any> = new Map();
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

    addLoadHandlerFns(): void {
        const handlerFn = (dataRecords: any[]) => {
            this.updateMapData(dataRecords);
        }
        this.dataStore.addLoaderHandlerFn(handlerFn);
    }

    abstract getListConfig(): any;

    getListKey(item: any): string {
        console.log(item);
        return 'DUDE';
        // return item.name;
    }

    abstract getStore(): AbstractStore;

    onAppear() {
        super.onAppear();
        this.dataStore.loadData();
    }

    updateList() {
        const keys: string[] = [];
        (this.dataMap.values() as any).forEach((item: any) => {
            keys.push(this.getListKey(item));
        });
        keys.sort();
        this.list.setData(keys);
    }

    updateMapData(data: any[]) {
        this.dataMap.clear();
        for (let i = 0; i < data.length; i++) {
            const item: any = data[i];
            const key: string = this.getListKey(item);
            this.dataMap.set(key, item);
        }
        this.updateList();
    }

}

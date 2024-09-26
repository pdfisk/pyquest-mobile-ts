import { EventConstants } from "../../constants";
import { AbstractStore } from "../../data";
import { QxScroll } from "../../qx/mobile/container/QxScroll";
import { QxList } from "../../qx/mobile/list/QxList";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractDataListPage extends AbstractPage {
    dataMap: Map<string, any> = new Map();
    dataStore: AbstractStore;
    list: QxList;
    scroll: QxScroll;

    constructor() {
        super();
        this.dataStore = this.getStore();
        this.list = new QxList(this.getListConfig());
        this.scroll = new QxScroll();
        this.addChangeHandlerFn();
        this.addLoadHandlerFns();
    }

    addContent() {
        this.scroll.add(this.list);
        this.addContentWidget(this.scroll);
    }

    addChangeHandlerFn() {
        this.list.addListener(
            EventConstants.QxEventChangeSelection,
            this.getOnChangeFn(),
            this
        );
    }

    addLoadHandlerFns(): void {
        const handlerFn = (dataRecords: any[]) => {
            this.updateMapData(dataRecords);
        }
        this.dataStore.addLoaderHandlerFn(handlerFn);
    }

    abstract getListConfig(): any;

    abstract getListKey(data: any): string;

    abstract getOnChangeFn(): Function;

    abstract getStore(): AbstractStore;

    isContentReady(): boolean {
        return this.list instanceof QxList;
    }

    onAppear() {
        super.onAppear();
        this.dataStore.loadData();
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setListHeight(adjustedHeight);
    }

    setListHeight(height:number) {
        this.list.setHeightPx(height);
    }

    updateList() {
        const keys: string[] = [];
        (this.dataMap.values() as any).forEach((data: any) => {
            keys.push(this.getListKey(data));
        });
        keys.sort();
        const values: any[] = [];
        keys.forEach((key: string) => {
            values.push(this.dataMap.get(key));
        });
        this.list.setData(values);
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

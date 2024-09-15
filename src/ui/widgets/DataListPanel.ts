import { AbstractStore } from '../../data/stores/AbstractStore';
import { QxList } from '../../qx/ui/list/QxList';
import { AbstractPanel } from './AbstractPanel';

export abstract class DataListPanel extends AbstractPanel {
    changeHandler?: Function;
    dataMap: Map<string, any> = new Map();
    dataStore?: AbstractStore;
    loadHandlerKeys: number[] = [];
    list: QxList;
    selectedData: any;

    constructor() {
        super();
        this.list = new QxList;
        this.selectedData = null;
        this.addCenter(this.list);
        this.setStore();
        this.addChangeHandlerFns();
        this.addLoadHandlerFns();
    }

    addChangeHandlerFn(fn: Function) {
        this.list.setChangeHandlerFn(fn);
    }

    addChangeHandlerFns(): void {
        const changeSelectionFn: Function = (name: any) => {
            this.onChangeSelection(name);
        }
        this.addChangeHandlerFn(changeSelectionFn);
    }

    addLoadHandlerFn(fn: Function) {
        const key = this.dataStore?.addLoaderHandlerFn(fn);
        if (typeof (key) === 'number')
            this.loadHandlerKeys.push(key);
    }

    addLoadHandlerFns(): void {
        const updateListFn: Function = (data: any[]) => {
            this.updateMapData(data);
        }
        this.addLoadHandlerFn(updateListFn);
    }

    clearSelection() {
        this.selectedData = null;
        this.list.initSelection();
    }

    getListKey(item: any): string {
        return item.name;
    }

    getSelectedData(): any {
        if (!this.hasSelectedData())
            return null;
        return this.selectedData;
    }

    getSelectionValue(name: string): any {
        this.selectedData = null;
        if (this.dataMap.has(name))
            this.selectedData = this.dataMap.get(name);
        return this.selectedData;
    }

    hasSelectedData(): boolean {
        return this.selectedData !== null && this.selectedData !== undefined;
    }

    isCategorySelected(item: any): boolean {
        return true;
    }

    onAppear() {
        super.onAppear();
        this.refresh();
    }

    onChangeSelection(key: string) {
        if (this.changeHandler)
            this.changeHandler(this.getSelectionValue(key));
    }

    refresh() {
        this.clearSelection();
        this.dataStore?.loadData();
    }

    releaseHandlers() {
        for (let key of this.loadHandlerKeys)
            this.dataStore?.removeLoadHandlerFn(key);
    }

    setChangeHandler(changeHandler: Function) {
        this.changeHandler = changeHandler;
    }

    abstract setStore(): void;

    updateList() {
        const keys: string[] = [];
        (this.dataMap.values() as any).forEach((item: any) => {
            if (this.isCategorySelected(item))
                keys.push(this.getListKey(item));
        });
        keys.sort();
        this.list.widget.initSelection();
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

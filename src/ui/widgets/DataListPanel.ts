import { AbstractStore } from '../../data/stores/AbstractStore';
import { QxList } from '../../qx/ui/list/QxList';
import { Panel } from './Panel';

export abstract class DataListPanel extends Panel {
    changeHandler?: Function;
    dataMap: Map<string, any> = new Map();
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

    addChangeHandlerFns(): void {
        const changeSelectionFn: Function = (name: any) => {
            this.onChangeSelection(name);
        }
        this.addChangeHandlerFn(changeSelectionFn);
    }

    addLoadHandlerFn(fn: Function) {
        this.dataStore?.addLoaderHandlerFn(fn);
    }

    addLoadHandlerFns(): void {
        const updateListFn: Function = (data: any[]) => {
            this.updateListData(data);
        }
        this.addLoadHandlerFn(updateListFn);
    }

    clearSelection() {
        this.list.initSelection();
    }

    getSelectionValue(name: string): any {
        if (this.dataMap.has(name))
            return this.dataMap.get(name);
        return null;
    }

    onAppear() {
        this.refresh();
    }

    onChangeSelection(name: string) {
        if (this.changeHandler)
            this.changeHandler(this.getSelectionValue(name));
    }

    refresh() {
        this.clearSelection();
        this.dataStore?.loadData();
    }

    setChangeHandler(changeHandler: Function) {
        this.changeHandler = changeHandler;
    }

    abstract setStore(): void;

    updateList(names: any[]) {
        this.list.widget.initSelection();
        this.list.setData(names);
    }

    updateListData(data: any[]) {
        this.dataMap.clear();
        const names: string[] = [];
        for (let i = 0; i < data.length; i++) {
            const item: any = data[i];
            const name: string = item.name;
            names.push(name);
            this.dataMap.set(name, item);
        }
        this.updateList(names);
    }

}

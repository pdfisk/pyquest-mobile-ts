import { CategoryConstants } from "../../constants/CategoryConstants";
import { EventConstants } from "../../constants/EventConstants";
import { MessageConstants } from "../../constants/MessageConstants";
import { MessageBus } from "../../messages";
import { Server } from "../../server/Server";
import { ServerUtil } from "../../server/ServerUtil";
import { DebugUtil } from '../../vm/util/DebugUtil';

export abstract class AbstractStore {
    categoryFilter: string;
    dataLoaded: boolean;
    dataRecords: any[];
    dataStore: any;
    loadHandlerFns: Map<number, Function>;
    server: Server;
    static fnCounter: number = 0;

    constructor() {
        this.categoryFilter = CategoryConstants.CategoryTagAll;
        this.dataLoaded = false;
        this.dataRecords = [];
        this.dataStore = new (window.qx as any).data.store.Json;
        this.dataStore.addListener(EventConstants.QxEventLoaded, this.onLoaded, this);
        this.loadHandlerFns = new Map<number, Function>;
        this.server = Server.getInstance();
    }

    addLoaderHandlerFn(loadHandlerFn: Function): number {
        const key = AbstractStore.fnCounter++;
        this.loadHandlerFns.set(key, loadHandlerFn);
        return key;
    }

    closeToast() {
        MessageBus.dispatch(EventConstants.DrawerCloseTop);
    }

    abstract createNewRecord(name: string): any;

    abstract createRecordData(record: any): any;

    deleteRecord(id: number) {
        const fn = () => { this.reload(); }
        Server.sendDeleteRequest(this.serviceName(), id, {}, fn);
    }

    getDataRecords(): any[] {
        return [];
    }

    handleLoadedData() {
        this.dataRecords = this.getDataRecords();
        const filteredRecords: any[] = [];
        for (let i = 0; i < this.dataRecords.length; i++) {
            const dataRecord = this.dataRecords[i];
            if (this.categoryFilter === CategoryConstants.CategoryTagAll || this.categoryFilter === dataRecord.category)
                filteredRecords.push(dataRecord);
        }
        for (let handlerFn of this.loadHandlerFns.values())
            handlerFn(filteredRecords);
    }

    loadData(showToast: boolean = true) {
        if (this.dataLoaded)
            this.dataStore.reload();
        else {
            // if (showToast)
            //     this.openToast(() => { this.setUrl(); });
            // else
            this.setUrl();
        }
    }

    newRecord(name: string) {
        const data = this.createNewRecord(name);;
        const fn = () => { this.reload(); }
        Server.sendPostRequest(this.serviceName(), data, fn);
    }

    onLoaded() {
        this.closeToast()
        this.dataLoaded = true;
        this.handleLoadedData();
    }

    openToast(fn: Function | null = null) {
        MessageBus.dispatch(EventConstants.DrawerOpenTop, MessageConstants.LoadingData, fn);
    }

    reload() {
        this.loadData();
    }

    removeLoadHandlerFn(key: number) {
        this.loadHandlerFns.delete(key);
    }

    saveRecord(record: any) {
        if (!record) return;
        const id = record.getId();
        const data = this.createRecordData(record);
        const fn = () => {
            MessageBus.dispatch(EventConstants.ServerProjectSaved, { status: MessageConstants.ProjectSaved });
            this.reload();
        }
        Server.sendPutRequest(this.serviceName(), id, data, fn);
    }

    setCategoryFilter(tag: string) {
        DebugUtil.log('setCategoryFilter', tag);
        this.categoryFilter = tag;
        this.reload();
    }

    setUrl() {
        const fn = () => {
            this.dataStore.setUrl(ServerUtil.getUrl(this.serviceName()));
        };
        MessageBus.dispatch(EventConstants.FunctionCall, fn);
    }

    abstract serviceName(): string

}

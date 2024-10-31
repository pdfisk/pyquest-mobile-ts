import { EventConstants } from "../../constants/EventConstants";
import { MessageConstants } from "../../constants/MessageConstants";
import { MessageBus } from "../../messages";
import { Server } from "../../server/Server";
import { ServerUtil } from "../../server/ServerUtil";

export abstract class AbstractStore {
    dataLoaded: boolean;
    dataRecords: any[];
    dataStore: any;
    loadHandlerFns: Map<number, Function>;
    server: Server;
    static fnCounter: number = 0;

    constructor() {
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
        MessageBus.dispatch(EventConstants.ToastHide);
    }

    abstract createNewRecord(): any;

    deleteRecord(data: any) {
        if (!data) return;
        const id = data.id;
        const fn = () => { this.reload(); }
        Server.sendDeleteRequest(this.serviceName(), id, data, fn);
    }

    getDataRecords(): any[] {
        return [];
    }

    handleLoadedData() {
        this.closeToast();
        this.dataRecords = this.getDataRecords();
        for (let handlerFn of this.loadHandlerFns.values())
            handlerFn(this.dataRecords);
    }

    loadData(showToast: boolean = true) {
        this.closeToast();
        if (this.dataLoaded) {
            this.dataStore.reload();
        }
        else {
            this.dataStore.setUrl(ServerUtil.getUrl(this.serviceName()));
            if (showToast)
                MessageBus.dispatch(EventConstants.ToastOpenTop, MessageConstants.LoadingData);
        }
    }

    newRecord() {
        const data = this.createNewRecord();;
        const fn = () => { this.reload(); }
        Server.sendPostRequest(this.serviceName(), data, fn);
    }

    onLoaded() {
        this.closeToast()
        this.dataLoaded = true;
        this.handleLoadedData();
    }

    reload() {
        this.loadData();
    }

    removeLoadHandlerFn(key: number) {
        this.loadHandlerFns.delete(key);
    }

    saveRecord(data: any) {
        if (!data) return;
        const id = data.id;
        const fn = () => { this.reload(); }
        Server.sendPutRequest(this.serviceName(), id, data, fn);
    }

    abstract serviceName(): string

}

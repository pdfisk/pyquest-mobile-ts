import { EventConstants } from "../../constants/EventConstants";
import { Server } from "../../server/Server";
import { ServerUtil } from "../../server/ServerUtil";
import { Toast } from "../../ui/widgets/Toast";

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
        this.dataRecords = this.getDataRecords();
        for (let handlerFn of this.loadHandlerFns.values())
            handlerFn(this.dataRecords);
    }

    loadData() {
        const userFn_1 = (toast: Toast) => {
            if (this.dataLoaded) {
                this.dataStore.reload();
            }
            else
                this.dataStore.setUrl(ServerUtil.getUrl(this.serviceName()));
        };
        Toast.showNoClose('Loading data...', userFn_1);
    }

    newRecord() {
        const data = this.createNewRecord();;
        const fn = () => { this.reload(); }
        Server.sendPostRequest(this.serviceName(), data, fn);
    }

    onLoaded() {
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

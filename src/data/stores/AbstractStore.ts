import { EventConstants } from "../../constants/EventConstants";
import { Server } from "../../server/Server";
import { ServerUtil } from "../../server/ServerUtil";

export abstract class AbstractStore {
    dataLoaded: boolean;
    dataRecords: any[];
    dataStore: any;
    loadHandlerFns: Function[];
    server: Server;

    constructor() {
        this.dataLoaded = false;
        this.dataRecords = [];
        this.dataStore = new (window.qx as any).data.store.Json;
        this.dataStore.addListener(EventConstants.QxEventLoaded, this.onLoaded, this);
        this.loadHandlerFns = [];
        this.server = Server.getInstance();
    }

    addLoaderHandlerFn(loadHandlerFn: Function) {
        this.loadHandlerFns.push(loadHandlerFn);
    }

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
        for (let i = 0; i < this.loadHandlerFns.length; i++) {
            const handlerFn: Function = this.loadHandlerFns[i];
            handlerFn(this.dataRecords);
        }
    }

    loadData() {
        if (this.dataLoaded)
            this.dataStore.reload();
        else
            this.dataStore.setUrl(ServerUtil.getUrl(this.serviceName()));
    }

    newRecord() {
        const data = { name: '-- new project --', description: '', code: '' };
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

    saveRecord(data: any) {
        if (!data) return;
        const id = data.id;
        const fn = () => { this.reload(); }
        Server.sendPutRequest(this.serviceName(), id, data, fn);
    }

    abstract serviceName(): string

}

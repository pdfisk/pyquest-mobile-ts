import { EventConstants } from "../../constants/EventConstants";
import { ServerConstants } from "../../constants/ServerConstants";
import { UrlConstants } from "../../constants/UrlConstants";
import { Server } from "../../server/Server";

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
        const url = this.getUrlWithId(this.serviceName(), id);
        const fn = () => { this.reload(); }
        Server.sendServerRequest(url, ServerConstants.MethodDelete, data, fn);
    }

    getDataRecords(): any[] {
        return [];
    }

    getHost() {
        if (window.location.host.startsWith(UrlConstants.local8082))
            return UrlConstants.local9080;
        else if (window.location.host.startsWith(UrlConstants.local8083))
            return UrlConstants.local9081;
        else
            return UrlConstants.heroku;
    }

    getUrl(service: string) {
        const host = this.getHost();
        return (window.qx as any).lang.String.format('%1/%2', [host, service]);
    }

    getUrlWithId(service: string, id: number) {
        return (window.qx as any).lang.String.format('%1/%2', [this.getUrl(service), id]);
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
            this.dataStore.setUrl(this.getUrl(this.serviceName()));
    }

    newRecord() {
        const data = { name: '-- new project --', description: '', code: '' };
        const url = this.getUrl(this.serviceName());
        const fn = () => { this.reload(); }
        Server.sendServerRequest(url, ServerConstants.MethodPost, data, fn);
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
        const url = this.getUrlWithId(this.serviceName(), id);
        const fn = () => { this.reload(); }
        Server.sendServerRequest(url, ServerConstants.MethodPut, data, fn);
    }

    abstract serviceName(): string

}

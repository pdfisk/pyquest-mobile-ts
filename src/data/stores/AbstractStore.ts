import { Server } from "../Server";

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
        this.dataStore.addListener('loaded', this.onLoaded, this);
        this.loadHandlerFns = [];
        this.server = Server.getInstance();
    }

    addLoaderHandlerFn(loadHandlerFn: Function) {
        this.loadHandlerFns.push(loadHandlerFn);
    }

    abstract serviceName(): string

    getDataRecords(): any[] {
        return [];
    }

    getHost() {
        if (window.location.host.startsWith('localhost:8082'))
            return 'http://localhost:9080';
        else if (window.location.host.startsWith('localhost:8083'))
            return 'http://localhost:9081';
        else
            return 'https://vistapython-7ee93adc9411.herokuapp.com';
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
        this.dataStore.setUrl(this.getUrl(this.serviceName()));
    }

    onLoaded() {
        this.dataLoaded = true;
        this.handleLoadedData();
    }

}

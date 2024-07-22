import { Server } from "../Server";

export abstract class AbstractStore {
    dataLoaded: boolean;
    dataStore: any;
    server: Server;

    constructor() {
        this.dataLoaded = false;
        this.dataStore = new (window.qx as any).data.store.Json;
        this.dataStore.addListener('loaded', this.onLoaded, this);
        this.server = Server.getInstance();
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

    onLoaded() {
        this.dataLoaded = true;
    }

    setUrl(url: string) {
        this.dataStore.setUrl(url);
    }

}

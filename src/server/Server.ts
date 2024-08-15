import { ServerConstants } from "../constants/ServerConstants";

export class Server {

    static instance: Server;

    static getInstance(): Server {
        if (!this.instance)
            this.instance = new Server;
        return this.instance;
    }

    static deleteProject(data: any) {
        this.getInstance().deleteProject(data);
    }

    static login(name: string, password: string, fn: Function) {
        this.getInstance().login(name, password, fn);
    }

    static newProject() {
        this.getInstance().newProject();
    }

    static register(name: string, password: string, fn: Function) {
        this.getInstance().register(name, password, fn);
    }

    static saveProject(data: any) {
        this.getInstance().saveProject(data);
    }

    static sendDeleteRequest(url: string, data: any, fn: Function) {
        this.getInstance().sendDeleteRequest(url, data, fn);
    }

    static sendGetRequest(url: string, data: any, fn: Function) {
        this.getInstance().sendGetRequest(url, data, fn);
    }

    static sendPostRequest(url: string, data: any, fn: Function) {
        this.getInstance().sendPostRequest(url, data, fn);
    }

    static sendPutRequest(url: string, data: any, fn: Function) {
        this.getInstance().sendPutRequest(url, data, fn);
    }

    static sendServerRequest(url: string, method: string, data: any, fn: Function) {
        this.getInstance().sendServerRequest(url, method, data, fn);
    }

    deleteProject(data: any) {
        console.log('deleteProject', data);
    }

    login(name: string, password: string, fn: Function) {
        console.log('LOGIN', name, password);
    }

    newProject() {
        console.log('newProject');
    }

    register(name: string, password: string, fn: Function) {
        console.log('REGISTER', name, password);
    }

    saveProject(data: any) {
        console.log('saveProject', data);
    }

    sendDeleteRequest(url: string, data: any, fn: Function) {
        this.sendServerRequest(url, ServerConstants.MethodDelete, data, fn);
    }

    sendGetRequest(url: string, data: any, fn: Function) {
        this.sendServerRequest(url, ServerConstants.MethodGet, data, fn);
    }

    sendPostRequest(url: string, data: any, fn: Function) {
        this.sendServerRequest(url, ServerConstants.MethodPost, data, fn);
    }

    sendPutRequest(url: string, data: any, fn: Function) {
        this.sendServerRequest(url, ServerConstants.MethodPut, data, fn);
    }

    sendServerRequest(url: string, method: string, data: any, fn: Function) {
        const req = new (window.qx as any).io.request.Xhr;
        req.setUrl(url);
        req.setMethod(method);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestData(window.JSON.stringify(data));
        req.addListener("success", (e: any) => {
            var req = e.getTarget();
            if (fn)
                fn(req);
        }, this);
        req.addListener('failure', (e: any) => {
            console.log('failure', e);
        }, this);
        req.send();
    }

}

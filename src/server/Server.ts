import { ServerConstants } from "../constants/ServerConstants";
import { ServerUtil } from "./ServerUtil";

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

    static sendDeleteRequest(service: string, id: number, data: any, fn: Function) {
        this.getInstance().sendDeleteRequest(service, id, data, fn);
    }

    static sendGetRequest(service: string, data: any, fn: Function) {
        this.getInstance().sendGetRequest(service, data, fn);
    }

    static sendPostRequest(service: string, data: any, fn: Function) {
        this.getInstance().sendPostRequest(service, data, fn);
    }

    static sendPutRequest(service: string, id: number, data: any, fn: Function) {
        this.getInstance().sendPutRequest(service, id, data, fn);
    }

    static sendServerRequest(url: string, method: string, data: any, fn: Function) {
        this.getInstance().sendServerRequest(url, method, data, fn);
    }

    deleteProject(data: any) {
        console.log('deleteProject', data);
    }

    login(name: string, passwd: string, fn: Function) {
        const data = { name: name, passwd: passwd };
        this.sendGetRequest(ServerConstants.ServiceLogin, data, fn);
    }

    newProject() {
        console.log('newProject');
    }

    register(name: string, password: string, fn: Function) {
        fn.call(null, { status: 'ok' });
    }

    sendDeleteRequest(service: string, id: number, data: any, fn: Function) {
        this.sendServerRequest(ServerUtil.getUrlWithId(service, id), ServerConstants.MethodDelete, data, fn);
    }

    sendGetRequest(service: string, data: any, fn: Function) {
        this.sendServerRequest(ServerUtil.getUrl(service), ServerConstants.MethodGet, data, fn);
    }

    sendPostRequest(service: string, data: any, fn: Function) {
        this.sendServerRequest(service, ServerConstants.MethodPost, data, fn);
    }

    sendPutRequest(service: string, id: number, data: any, fn: Function) {
        this.sendServerRequest(ServerUtil.getUrlWithId(service, id), ServerConstants.MethodPut, data, fn);
    }

    sendServerRequest(url: string, method: string, data: any, fn: Function) {
        const req = new (window.qx as any).io.request.Xhr;
        if (ServerUtil.methodHasBody(method))
            req.setRequestData(data);
        else
            url = `${url}?${ServerUtil.serializeData(req, data)}`;
        req.setUrl(url);
        req.setMethod(method);
        req.setRequestHeader('Content-Type', 'application/json');
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

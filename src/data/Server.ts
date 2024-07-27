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

    static newProject() {
        this.getInstance().newProject();
    }

    static saveProject(data: any) {
        this.getInstance().saveProject(data);
    }

    deleteProject(data: any) {
        console.log('deleteProject', data);
    }

    newProject() {
        console.log('newProject');
    }

    saveProject(data: any) {
        console.log('saveProject', data);
    }

    sendGetRequest(url: string, fn: Function) {
        this.sendServerRequest(url, 'GET', {}, fn);
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

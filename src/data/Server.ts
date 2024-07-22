export class Server {

    static instance: Server;

    static getInstance(): Server {
        if (!this.instance)
            this.instance = new Server;
        return this.instance;
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

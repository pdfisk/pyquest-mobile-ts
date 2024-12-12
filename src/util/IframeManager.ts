import { QxIframe } from "../qx/ui/embed/QxIframe";

export class IframeManager {
    subscribers: Map<string, QxIframe> = new Map;
    static instance: IframeManager;

    static getInstance(): IframeManager {
        if (!this.instance)
            this.instance = new IframeManager();
        return this.instance;
    }

    static subscribe(subscriber: QxIframe) {
        this.getInstance().subscribe(subscriber);
    }

    static unsubscribe(subscriber: QxIframe) {
        this.getInstance().unsubscribe(subscriber);
    }

    private constructor() {
        window.onmessage = messageEvent => { this.onMessage(messageEvent) };
    }

    onMessage(messageEvent: any) {
        const data = messageEvent.data;
        const name = data.name;
        if (!name) return;
        if (this.subscribers.has(name)) {
            const iframe = this.subscribers.get(name);
            if (iframe instanceof QxIframe)
                iframe.recieveMessage(data.args);
        }
    }

    subscribe(subscriber: QxIframe) {
        if (this.subscribers.has(subscriber.name))
            return;
        this.subscribers.set(subscriber.name, subscriber);
    }

    unsubscribe(subscriber: QxIframe) {
        if (this.subscribers.has(subscriber.name))
            this.subscribers.delete(subscriber.name);
    }

}

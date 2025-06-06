import { NotificationManager } from "../util/NotificationManager";
import { DebugUtil } from '../util/DebugUtil';

export class MessageBus {
    messageBus: any = null;
    static instance: MessageBus;

    static getInstance(): MessageBus {
        if (!this.instance) {
            NotificationManager.getInstance();
            this.instance = new MessageBus;
        }
        return this.instance;
    }

    static dispatch(name: string, ...args: any[]) {
        this.getInstance().dispatch(name, args);
    }

    static subscribe(name: string, fn: Function, context: any) {
        this.getInstance().subscribe(name, fn, context);
    }

    static unsubscribe(name: string, fn: Function, context: any) {
        this.getInstance().unsubscribe(name, fn, context);
    }

    dispatch(name: string, args: any[]) {
        const message = new (window as any).qx.event.message.Message(name, args);
        this.getMessageBus().dispatch(message);
    }

    getMessageBus(): any {
        if (!this.messageBus)
            this.messageBus = new (window as any).qx.event.message.Bus;
        return this.messageBus;
    }

    show(caption: string) {
        DebugUtil.log(caption, this.messageBus.getSubscriptions());
    }

    subscribe(name: string, fn: Function, context: any) {
        this.getMessageBus().subscribe(name, fn, context);
    }

    unsubscribe(name: string, fn: Function, context: any) {
        this.getMessageBus().unsubscribe(name, fn, context);
    }

}

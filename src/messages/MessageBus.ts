export class MessageBus {
    messageBus: any;
    static instance: MessageBus;

    static getInstance(): MessageBus {
        if (!this.instance)
            this.instance = new MessageBus;
        return this.instance;
    }

    static dispatch(name: string, data: any) {
        this.getInstance().dispatch(name, data);
    }

    static subscribe(name: string, fn: Function, context: any) {
        this.getInstance().subscribe(name, fn, context);
    }

    static unsubscribe(name: string, fn: Function, context: any) {
        this.getInstance().unsubscribe(name, fn, context);
    }

    dispatch(name: string, data: any) {
        const message = new (window as any).qx.event.message.Message(name, data);
        this.getMessageBus().dispatch(message);
    }

    getMessageBus(): any {
        if (!this.messageBus)
            this.messageBus = new (window as any).qx.event.message.Bus;
        return this.messageBus;
    }

    show(caption: string) {
        console.log(caption, this.messageBus.getSubscriptions());
    }

    subscribe(name: string, fn: Function, context: any) {
        this.getMessageBus().subscribe(name, fn, context);
    }

    unsubscribe(name: string, fn: Function, context: any) {
        this.getMessageBus().unsubscribe(name, fn, context);
    }

}

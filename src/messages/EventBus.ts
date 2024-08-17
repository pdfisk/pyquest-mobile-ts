export class EventBus {
    messageBus: any;
    static instance: EventBus;

    static getInstance(): EventBus {
        if (!this.instance)
            this.instance = new EventBus;
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

    private constructor() {
        this.messageBus = (window as any).qx.event.message.Bus;
    }

    dispatch(name: string, data: any) {
        const message = new (window as any).qx.event.message.Message(name, data);
        this.messageBus.dispatch(message);
    }

    show(caption: string) {
        console.log(caption, this.messageBus.getSubscriptions());
    }

    subscribe(name: string, fn: Function, context: any) {
        this.messageBus.subscribe(name, fn, context);
        this.show('subscribe');
    }

    unsubscribe(name: string, fn: Function, context: any) {
        this.messageBus.unsubscribe(name, fn, context);
        this.show('unsubscribe');
    }

}

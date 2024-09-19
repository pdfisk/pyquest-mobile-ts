import { QxNavigationPage } from "../qx/mobile/page/QxNavigationPage";

export class ResizeManager {
    subscribers: QxNavigationPage[];

    static instance: ResizeManager;

    static getInstance(): ResizeManager {
        if (!this.instance)
            this.instance = new ResizeManager();
        return this.instance;
    }

    static subscribe(subscriber: QxNavigationPage) {
        this.getInstance().subscribe(subscriber);
    }

    static unsubscribe(subscriber: QxNavigationPage) {
        this.getInstance().unsubscribe(subscriber);
    }

    private constructor() {
        this.subscribers = [];
        (window as any).qx.event.Registration.addListener(
            window,
            'resize',
            this.onResize,
            this
        );
        (window as any).qx.event.Registration.addListener(
            window,
            'orientationchange',
            this.onOrientation,
            this
        );
    }

    onOrientation() {
        for (let i = 0; i < this.subscribers.length; i++)
            this.subscribers.at(i)?.onOrientation();
    }

    onResize() {
        for (let i = 0; i < this.subscribers.length; i++)
            this.subscribers.at(i)?.onResize();
    }

    subscribe(subscriber: QxNavigationPage) {
        if (this.subscribers.includes(subscriber))
            return;
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: QxNavigationPage) {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1)
            this.subscribers.splice(index, 1);
    }

}

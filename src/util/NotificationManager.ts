import { EventConstants, QxConstants } from "../constants";
import { MessageConstants } from "../constants/MessageConstants";
import { MessageBus } from "../messages";
import { QxDrawer } from "../qx/ui/mobile/container/QxDrawer";

export class NotificationManager {
    static topDrawer: QxDrawer;
    static instance: NotificationManager | null = null;

    static getInstance(): NotificationManager {
        if (this.instance == null)
            this.instance = new NotificationManager();
        return this.instance;
    }

    static init() {
        this.topDrawer = new QxDrawer(MessageConstants.Empty, QxConstants.DrawerOrientionTop);
        MessageBus.subscribe(EventConstants.DrawerCloseTop, this.onCloseTop, this);
        MessageBus.subscribe(EventConstants.DrawerOpenTop, this.onOpenTop, this);
    }

    static onCloseTop() {
        this.topDrawer.hide();
    }

    static onOpenTop(args: any) {
        const data: any[] = args.getData();
        const message: string = data[0];
        const fn = data.length > 1 ? data[1] : null;
        this.topDrawer.setLabel(message);
        this.topDrawer.setFn(fn);
        this.topDrawer.show();
    }

    // startCountDown(duration: number) {
    //     const fn = () => {
    //         this.close
    //     };
    //     TimerManager.start(fn, duration);
    // }

}
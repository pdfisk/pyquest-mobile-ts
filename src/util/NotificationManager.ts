import { EventConstants, QxConstants } from "../constants";
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
        this.topDrawer = new QxDrawer('', QxConstants.DrawerOrientionTop);
        MessageBus.subscribe(EventConstants.DrawerCloseTop, this.onHide, this);
        MessageBus.subscribe(EventConstants.DrawerOpenTop, this.onOpenTop, this);
    }

    static onHide() {
        this.topDrawer.hide();
    }

    static onOpenTop(args: any) {
        const data: any[] = args.getData();
        const message: string = data[0];
        console.log('onOpenTop', data);
        this.topDrawer.setLabel(message);
        this.topDrawer.show();
    }

    // startCountDown(duration: number) {
    //     const fn = () => {
    //         this.close
    //     };
    //     TimerManager.start(fn, duration);
    // }

}

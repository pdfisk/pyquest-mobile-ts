import { EventConstants, QxConstants } from "../../constants";
import { MessageBus } from "../../messages";
import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";
import { QxDrawer } from "../../qx/ui/mobile/container/QxDrawer";

export class Toast extends QxComposite {
    static topDrawer: QxDrawer;
    static instance: Toast | null = null;

    static getInstance(): Toast {
        if (this.instance == null)
            this.instance = new Toast();
        return this.instance;
    }

    static init() {
        this.topDrawer = new QxDrawer('', QxConstants.DrawerOrientionTop);
        MessageBus.subscribe(EventConstants.ToastHide, this.onHide, this);
        MessageBus.subscribe(EventConstants.ToastOpenTop, this.onOpenTop, this);
    }

    static onHide() {
        this.topDrawer.hide();
    }

    static onOpenTop(args: any) {
        const data: any[] = args.getData();
        const message:string = data[0];
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

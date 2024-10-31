import { EventConstants, QxConstants } from "../../constants";
import { MessageBus } from "../../messages";
import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";
import { QxDrawer } from "../../qx/ui/mobile/container/QxDrawer";

export class Toast extends QxComposite {
    drawer: QxDrawer;
    static instance: Toast | null = null;

    static getInstance(): Toast {
        if (this.instance == null)
            this.instance = new Toast();
        return this.instance;
    }

    static hide() {
        this.getInstance().hide();
    }

    static openBottom(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showBottom(message, QxConstants.DrawerDurationMax);
    }

    static openLeft(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showLeft(message, QxConstants.DrawerDurationMax);
    }

    static openRight(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showRight(message, QxConstants.DrawerDurationMax);
    }

    static openTop(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showTop(message, QxConstants.DrawerDurationMax);
    }

    static showBottom(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showMessage(message, duration, QxConstants.DrawerOrientionBottom)
    }

    static showLeft(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showMessage(message, duration, QxConstants.DrawerOrientionLeft)
    }

    static showRight(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showMessage(message, duration, QxConstants.DrawerOrientionRight)
    }

    static showTop(message: string, duration: number = QxConstants.DrawerDuration) {
        this.showMessage(message, duration, QxConstants.DrawerOrientionTop)
    }

    static showMessage(message: string, duration: number, orientation: string) {
        const toast = this.getInstance();
        toast.setMessage(message);
        toast.setDuration(duration);
        toast.setOrientation(orientation);
        toast.show();
    }

    private constructor() {
        super();
        this.drawer = new QxDrawer();
        MessageBus.subscribe(EventConstants.ToastOpenTop, this.onOpenTop, this);
    }

    hide() {
        this.drawer.hide();
    }

    onOpenTop(message: any) {
        console.log('onOpenTop', message);
    }

    setDuration(duration: number) {
    }

    setMessage(message: string) {
        this.drawer.setLabel(message);
    }

    setOrientation(orientation: string) {
        this.drawer.setOrientation(orientation);
    }

    show() {
        this.drawer.show();
    }

    // startCountDown(duration: number) {
    //     const fn = () => {
    //         this.close
    //     };
    //     TimerManager.start(fn, duration);
    // }

}

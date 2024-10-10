import { QxConstants } from "../../constants";
import { QxDrawer } from "../../qx/mobile/container/QxDrawer";
import { QxWidget } from "../../qx/mobile/core/QxWidget";
import { TimerManager } from "../../util/TimerManager";

export class Toast extends QxWidget {
    drawer: QxDrawer;
    startTime: number;
    userFn: Function;

    static show(message: string, userFn: Function, duration: number = QxConstants.DrawerDuration): Toast {
        return new Toast(message, userFn, duration);
    }

    static showNoClose(message: string, userFn: Function): Toast {
        return this.show(message, userFn, 1000);
    }

    private constructor(message: string, userFn: Function, duration: number, orientation: string = QxConstants.DrawerOrientionTop) {
        super();
        this.startTime = Date.now();
        this.userFn = userFn;
        this.drawer = new QxDrawer(message, QxConstants.DrawerOrientionTop);
        this.startCountDown(duration);
    }

    startCountDown(duration: number) {
        const fn = () => {
            console.log('before userFn', Date.now.toString());
            this.userFn();
            console.log('after userFn', Date.now.toString());
        };
        TimerManager.start(fn, duration);
    }

}

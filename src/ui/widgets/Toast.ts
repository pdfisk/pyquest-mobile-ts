import { QxConstants } from "../../constants";
import { QxDrawer } from "../../qx/mobile/container/QxDrawer";
import { QxWidget } from "../../qx/mobile/core/QxWidget";
import { TimerManager } from "../../util/TimerManager";

export class Toast extends QxWidget {
    drawer: QxDrawer;
    startTime: number;
    userFn_1: Function;
    userFn_2: Function;
    userResult_1: any = null;
    userResult_2: any = null;

    static show(message: string, userFn_1: Function | null, userFn_2: Function | null, duration: number = QxConstants.DrawerDuration): Toast {
        return new Toast(message, userFn_1, userFn_2, duration);
    }

    static showNoClose(message: string, userFn_1: Function | null = null, userFn_2: Function | null = null): Toast {
        return this.show(message, userFn_1, userFn_2, 0);
    }

    private constructor(message: string, userFn_1: Function | null, userFn_2: Function | null, duration: number, orientation: string = QxConstants.DrawerOrientionTop) {
        super();
        this.startTime = Date.now();
        this.userFn_1 = userFn_1 == null ? function () { } : userFn_1;
        this.userFn_2 = userFn_2 == null ? function () { } : userFn_2;
        this.drawer = new QxDrawer(message, QxConstants.DrawerOrientionTop);
        this.startCountDown();
    }

    startCountDown() {
        const fn = () => {
            this.userResult_1 = this.userFn_1(this);
            this.drawer.hide();
            this.userResult_2 = this.userFn_2(this);
        };
        TimerManager.start(fn, QxConstants.ToastDelay);
    }

}

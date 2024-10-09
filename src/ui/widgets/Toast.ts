import { QxConstants } from "../../constants";
import { QxDrawer } from "../../qx/mobile/container/QxDrawer";
import { TimerManager } from "../../util/TimerManager";

export class Toast extends QxDrawer {

    constructor(message: string, duration: number = QxConstants.DrawerDuration, orientation: string = QxConstants.DrawerOrientionTop) {
        super(message, orientation);
        if (duration > 0)
            this.startCountDown(duration);
    }

    startCountDown(duration: number) {
        const fn = () => { this.hide() };
        TimerManager.start(fn, duration);
    }

}

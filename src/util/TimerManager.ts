import { QxFactory, QxObject } from "../qx";

export class TimerManager extends QxObject {
    timerId: number = 0;

    static start(callback: Function, delay: number=0) {
        const timer = new TimerManager();
        timer.start(callback, delay);
        return timer;
    }

    constructor() {
        super(QxFactory.timerManager());
    }

    start(callback: Function, delay: number) {
        this.timerId = this.widget.start(
            callback,
            null,
            null,
            null,
            delay
        );
    }

    stop() {
        this.widget.stop(this.timerId);
    }

}

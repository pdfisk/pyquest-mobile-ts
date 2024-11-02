import { QxFactory, QxObject } from "../qx";

export class TimerManager extends QxObject {
    static instance: TimerManager;

    static getInstance(): TimerManager {
        if (!this.instance)
            this.instance = new TimerManager;
        return this.instance;
    }

    static start(callback: Function, delay: number = 0): number {
        const timer = this.getInstance();
        return timer.start(callback, delay);
    }

    private constructor() {
        super(QxFactory.timerManager());
    }

    start(callback: Function, delay: number): number {
        return this.widget.start(
            callback,
            null,
            null,
            null,
            delay
        );
    }

    stop(timerId: number) {
        this.widget.stop(timerId);
    }

}

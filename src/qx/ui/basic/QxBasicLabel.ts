import { QxWidget } from "../core/QxWidget";

export class QxBasicLabel extends QxWidget {
    buffer: string;

    constructor(widget:any) {
        super(widget);
        this.buffer = '';
    }

    clear() {
        this.setValue('');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getValue(): string {
        if (this.hasAppeared)
            return this.widget.getValue();
        else
            return this.buffer;
    }

    onAppear() {
        super.onAppear();
        this.setValue(this.buffer);
        this.buffer = '';
    }

    setValue(value: string) {
        if (!this.hasAppeared)
            this.buffer = value;
        else
            this.widget.setValue(value);
    }

}

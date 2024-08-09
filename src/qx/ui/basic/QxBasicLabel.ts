import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicLabel extends QxWidget {
    buffer: string;

    constructor(text: string = '') {
        super(QxFactory.basicLabel(text));
        this.buffer = '';
    }

    clear() {
        this.setValue('');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getValue(): string {
        return this.widget.getValue();
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

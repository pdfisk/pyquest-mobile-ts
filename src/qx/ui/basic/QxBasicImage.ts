import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicImage extends QxWidget {
    source: string;

    constructor() {
        super(QxFactory.basicImage());
        this.source = ''
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getSource(): string {
        if (this.hasAppeared)
            return this.widget.getSource();
        return this.source;
    }

    onAppear() {
        super.onAppear();
        this.setSource(this.source);
    }

    setSource(source: string) {
        if (this.hasAppeared)
            this.widget.setSource(source);
        else
            this.source = source;
    }

}

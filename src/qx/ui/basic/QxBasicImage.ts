import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicImage extends QxWidget {
    source: string;

    constructor(source: string = '') {
        super(QxFactory.basicImage());
        this.setObjectFitCover();
        this.setScale();
        this.setForceRatio();
        this.source = this.setSource(source);
    }

    getSource(): string {
        if (this.hasAppeared)
            return this.widget.getSource();
        return this.source;
    }

    setForceRatio(value: string = 'width') {
        this.widget.setForceRatio(value);
    }

    setScale(scale: boolean = true) {
        this.widget.setScale(scale);
    }

    setSource(source: string): string {
        this.source = source;
        this.widget.setSource(this.source);
        return this.source;
    }

}

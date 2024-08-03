import { QxObject } from '../../core/QxObject';

export abstract class QxAbstractLayout extends QxObject {

    constructor(widget: any) {
        super(widget);
    }

    setAlignX(alignment: string) {
        this.widget.setAlignX(alignment);
    }

    setAlignY(alignment: string) {
        this.widget.setAlignY(alignment);
    }

    setSpacing(spacing: number) {
        this.widget.setSpacing(spacing);
    }

}

import { QxObject } from '../../core/QxObject';

export abstract class QxAbstractLayout extends QxObject {

    constructor(widget: any) {
        super(widget);
    }

    setSpacing(spacing: number) {
    }

}
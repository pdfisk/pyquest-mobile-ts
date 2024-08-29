import { QxObject } from '../../core/QxObject';

export abstract class QxLayoutItem extends QxObject {

    constructor(widget: any) {
        super(widget);
    }

    getSizeHint(): any {
        return this.widget.getSizeHint();
    }

}

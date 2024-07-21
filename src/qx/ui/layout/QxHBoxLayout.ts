import { QxAbstractLayout } from './QxAbstractLayout';
import { QxFactory } from '../../factory/QxFactory';

export class QxHBoxLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.hboxLayout());
    }

    setSpacing(spacing: number) {
        this.widget.setSpacing(spacing);
    }

}

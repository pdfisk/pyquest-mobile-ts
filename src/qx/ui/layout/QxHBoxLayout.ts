import { LayoutConstants } from '../../../constants/LayoutConstants';
import { QxFactory } from '../../factory/QxFactory';
import { QxAbstractLayout } from './QxAbstractLayout';

export class QxHBoxLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.hboxLayout());
    }

    initialize() {
        super.initialize();
        this.setAlignX(this.defaultAlignX());
    }

    defaultAlignX(): string {
        return LayoutConstants.AlignLeft;
    }

}

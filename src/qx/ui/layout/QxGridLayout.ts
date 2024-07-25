import { QxFactory } from '../../factory/QxFactory';
import { QxAbstractLayout } from './QxAbstractLayout';

export class QxGridLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.gridLayout());
    }

    setColumnWidth(colNo: number, width: number) {
        this.widget.setColumnWidth(colNo, width);
    }

    setSpacingX(spacing: number) {
        this.widget.setSpacingX(spacing);
    }

    setSpacingY(spacing: number) {
        this.widget.setSpacingY(spacing);
    }

}

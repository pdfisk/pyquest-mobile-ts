import { QxFactory } from '../../factory/QxFactory';
import { QxAbstractLayout } from './QxAbstractLayout';

export class QxGridLayout extends QxAbstractLayout {

    constructor() {
        super(QxFactory.gridLayout());
    }

    setColumnFlex(colNo: number, flex: number) {
        this.widget.setColumnFlex(colNo, flex);
    }

    setColumnWidth(colNo: number, width: number) {
        this.widget.setColumnWidth(colNo, width);
    }

    setRowFlex(rowNo: number, flex: number) {
        this.widget.setRowFlex(rowNo, flex);
    }

    setRowHeight(rowNo: number, height: number) {
        this.widget.setRowHeight(rowNo, height);
    }

    setSpacing(spacing: number) {
        this.widget.setSpacing(spacing);
    }

    setSpacingX(spacing: number) {
        this.widget.setSpacingX(spacing);
    }

    setSpacingY(spacing: number) {
        this.widget.setSpacingY(spacing);
    }

}

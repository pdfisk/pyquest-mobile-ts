import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxAtom extends QxWidget {
    columnIndex: number;
    rowIndex: number;

    constructor(row: number, column: number) {
        super(QxFactory.mobileAtom());
        this.rowIndex = row;
        this.columnIndex = column;
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

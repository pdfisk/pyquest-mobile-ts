import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { BoardRow } from "./BoardRow";

export class BoardPanel extends QxVBox {
    size: number = 7;

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
    }

    addRow(): BoardRow {
        const row = new BoardRow(this);
        this.addFlex(row);
        return row;
    }

    addRows() {
        for (let i = 0; i < this.size; i++) {
            const row = this.addRow();
            if (i < this.size - 1)
                row.setMarginBottomPx(4);
        }
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addRows();
    }

}

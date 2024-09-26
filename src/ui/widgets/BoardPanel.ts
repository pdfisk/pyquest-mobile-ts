import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { BoardRow } from "./BoardRow";

export class BoardPanel extends QxVBox {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor('red');
        // this.addRows();
        (window as any).X = this;
    }

    addRow(): BoardRow {
        const row = new BoardRow();
        this.addFlex(row);
        return row;
    }

    addRows() {
        for (let i = 0; i < 7; i++) {
            const row = this.addRow();
            if (i % 2 == 0)
                row.setBackgroundColor('honeydew');
            else
                row.setBackgroundColor('peru');
        }
    }

}

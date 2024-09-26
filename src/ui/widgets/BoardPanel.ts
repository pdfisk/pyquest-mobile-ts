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

    addRow() {
        const row = new BoardRow();
        this.add(row);
    }

    addRows() {
        for (let i = 0; i < 7; i++)
            this.addRow();
    }

}

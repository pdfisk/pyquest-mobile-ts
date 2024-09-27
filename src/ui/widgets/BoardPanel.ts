import { ColorConstants, SizeConstants } from "../../constants";
import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { BoardRow } from "./BoardRow";

export class BoardPanel extends QxVBox {
    size: number = 7;

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardBackground);
        this.setBorderPx(ColorConstants.BoardBackground, SizeConstants.BoardTileSeparatorWidth);
    }

    addRow(rowIndex: number): BoardRow {
        const row = new BoardRow(this, rowIndex);
        this.addFlex(row);
        return row;
    }

    addRows() {
        for (let rowIndex = 0; rowIndex < this.size; rowIndex++) {
            const row = this.addRow(rowIndex);
            if (rowIndex < this.size - 1)
                row.setMarginBottomPx(SizeConstants.BoardTileSeparatorWidth);
        }
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addRows();
    }

}

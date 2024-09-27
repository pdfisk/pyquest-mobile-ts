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

    addRow(): BoardRow {
        const row = new BoardRow(this);
        this.addFlex(row);
        return row;
    }

    addRows() {
        for (let i = 0; i < this.size; i++) {
            const row = this.addRow();
            if (i < this.size - 1)
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

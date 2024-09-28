import { ColorConstants, SizeConstants } from "../../constants";
import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { BoardRow } from "./BoardRow";
import { BoardTile } from "./BoardTile";

export class BoardPanel extends QxVBox {
    size: number;
    tileMap: Map<string, BoardTile> = new Map;

    constructor(size: number = 7) {
        super();
        this.size = size;
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardBackground);
        this.setBorderPx(ColorConstants.BoardBackground, SizeConstants.BoardTileRowSeparatorWidth);
    }

    addRow(rowIndex: number): BoardRow {
        const row = new BoardRow(this, rowIndex, this.size);
        this.addFlex(row);
        return row;
    }

    addRows() {
        for (let rowIndex = 0; rowIndex < this.size; rowIndex++) {
            const row = this.addRow(rowIndex);
            if (rowIndex < this.size - 1)
                row.setMarginBottomPx(SizeConstants.BoardTileRowSeparatorWidth);
        }
    }

    cacheAndRelease() {
        for (let tile of this.tileMap.values())
            tile.cacheAndRelease();
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addRows();
    }

    registerTile(tile: BoardTile) {
        this.tileMap.set(tile.mapKey(), tile);
    }

    restoreAndLock() {
        for (let tile of this.tileMap.values())
            tile.restoreAndLock();
    }

}

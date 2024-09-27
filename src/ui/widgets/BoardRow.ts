import { SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;
    rowIndex: number;
    size: number;

    constructor(boardPanel: BoardPanel, rowIndex: number, size: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.size = size;
    }

    initialize() {
        super.initialize();
    }

    addTile(columnIndex: number): BoardTile {
        const tile = new BoardTile(this.boardPanel, this.rowIndex, columnIndex);
        this.addFlex(tile);
        return tile;
    }

    addTiles() {
        for (let columnIndex = 0; columnIndex < this.size; columnIndex++) {
            const tile = this.addTile(columnIndex);
            if (columnIndex < this.size - 1)
                tile.setMarginRightPx(SizeConstants.BoardTileColumnSeparatorWidth);
        }
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addTiles();
    }

}

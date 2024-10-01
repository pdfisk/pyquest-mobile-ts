import { QxWidget } from "../../../dist/mobile";
import { SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;
    boardSize: number;
    rowIndex: number;

    constructor(boardPanel: BoardPanel, rowIndex: number, boardSize: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.boardSize = boardSize;
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
        for (let columnIndex = 0; columnIndex < this.boardSize; columnIndex++) {
            const tile = this.addTile(columnIndex);
            if (columnIndex < this.boardSize - 1)
                tile.setMarginRightPx(SizeConstants.BoardTileColumnSeparatorWidth);
        }
    }

    getTile(index: number): BoardTile | null {
        const child = this.getChild(index);
        if (child instanceof BoardTile)
            return child as BoardTile;
        return null;
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.resizeTo(this.boardSize);
    }

    resizeTo(boardSize: number) {
        this.boardSize = boardSize;
        this.removeAll();
        this.addTiles();
    }

}

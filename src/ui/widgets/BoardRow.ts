import { SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;
    rowIndex: number;
    size: number = 7;

    constructor(boardPanel: BoardPanel, rowIndex: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
    }

    initialize() {
        super.initialize();
    }

    addTile(): BoardTile {
        const tile = new BoardTile(this.boardPanel);
        this.addFlex(tile);
        return tile;
    }

    addTiles() {
        for (let i = 0; i < this.size; i++) {
            const tile = this.addTile();
            if (i < this.size - 1)
                tile.setMarginRightPx(SizeConstants.BoardTileSeparatorWidth);
        }
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addTiles();
    }

}

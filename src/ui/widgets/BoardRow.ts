import { SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;
    size: number = 7;

    constructor(boardPanel: BoardPanel) {
        super();
        this.boardPanel = boardPanel;
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

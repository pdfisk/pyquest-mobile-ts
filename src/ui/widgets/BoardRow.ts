import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;

    constructor(boardPanel: BoardPanel) {
        super();
        this.boardPanel = boardPanel;
    }

    initialize() {
        super.initialize();
        this.setMarginBottomPx(4);
    }

    addTile(): BoardTile {
        const tile = new BoardTile(this.boardPanel);
        tile.setMarginRightPx(4);
        this.addFlex(tile);
        return tile;
    }

    addTiles() {
        for (let i = 0; i < 7; i++) {
            const tile = this.addTile();
            if (i % 2 == 0)
                tile.setBackgroundColor('gray');
            else
                tile.setBackgroundColor('slategray');
        }
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        this.addTiles();
    }

}

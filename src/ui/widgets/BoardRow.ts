import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setMarginBottomPx(4);
    }

    addTile(): BoardTile {
        const tile = new BoardTile();
        tile.setPaddingRightPx(4);
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

    onAppear() {
        this.addTiles();
    }

}

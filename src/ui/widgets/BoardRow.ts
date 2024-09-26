import { QxHBox } from "../../qx/mobile/container/QxHBox";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        // this.setBackgroundColor('green');
        // this.setHeightPx(50);
        // this.addTiles();
    }

    addTile() {
        const tile = new BoardTile();
        tile.setPaddingBottomPx(4);
        this.addFlex(tile);
    }

    addTiles() {
        for (let i = 0; i < 7; i++)
            this.addTile();
    }

}

import { ColorConstants, SizeConstants } from "../../constants";
import { ActionRec } from "../../handlers";
import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { BoardRow } from "./BoardRow";
import { BoardTile } from "./BoardTile";

export class BoardPanel extends QxVBox {
    size: number = 0;
    tileMap: Map<string, BoardTile> = new Map;

    constructor(size: number = 7) {
        super();
        this.resizeBoard(size);
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

    deferAction(actionRec: ActionRec) {
        console.log('deferAction', actionRec);
    }

    cacheAndRelease() {
        for (let tile of this.tileMap.values())
            tile.cacheAndRelease();
    }

    handlesOnAppear(): boolean {
        return true;
    }

    lockMaxAndMin() {
        for (let tile of this.tileMap.values())
            tile.lockMaxAndMin();
    }

    onAppear() {
        super.onAppear();
        this.addRows();
    }

    onResize() {
        for (let tile of this.tileMap.values())
            tile.onResize();
    }

    performAction(actionRec: ActionRec) {
        console.log('performAction', actionRec);
    }

    registerTile(tile: BoardTile) {
        this.tileMap.set(tile.mapKey(), tile);
    }

    resizeBoard(boardSize: number) {
        this.size = boardSize;
        this.widget.removeAll();
        if (this.hasAppeared)
            this.addRows();
    }

    restore() {
        for (let tile of this.tileMap.values())
            tile.restore();
    }

}

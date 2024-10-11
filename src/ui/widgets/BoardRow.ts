import { SizeConstants } from "../../constants";
import { QxHBox } from "../../qx/ui/mobile/container/QxHBox";
import { BoardPanel } from "./BoardPanel";
import { BoardTile } from "./BoardTile";

export class BoardRow extends QxHBox {
    boardPanel: BoardPanel;
    boardSize: number;
    rowIndex: number;
    tiles: BoardTile[] = [];

    constructor(boardPanel: BoardPanel, rowIndex: number, boardSize: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.boardSize = boardSize;
    }

    initialize() {
        super.initialize();
    }

    addTile(columnIndex: number): BoardTile | undefined {
        const tile = this.boardPanel.getTile(this.rowIndex, columnIndex);
        if (tile)
            this.addFlex(tile);
        return tile;
    }

    addTiles() {
        this.tiles = [];
        for (let columnIndex = 0; columnIndex < this.boardSize; columnIndex++) {
            const tile = this.addTile(columnIndex);
            if (columnIndex < this.boardSize - 1 && tile instanceof BoardTile)
                tile.setMarginRightPx(SizeConstants.BoardTileColumnSeparatorWidth);
        }
    }

    cacheAndRelease() {
        console.log('row cacheAndRelease');
        // for (let tile of this.tiles)
        //     tile.cacheAndRelease();
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

    lockRowMaxValues(rowWidth: number, rowHeight: number) {
        this.setHeightPx(rowHeight);
        this.setMaxHeightPx(rowHeight);
        this.setWidthPx(rowWidth);
        this.setMaxWidthPx(rowWidth);
        const tileWidth = (rowWidth - (this.boardSize - 1)) / this.boardSize;
        console.log('lockRowMaxValues', rowWidth, rowHeight, tileWidth);
        for (let tile of this.tiles)
            tile.lockTileMaxValues(tileWidth, rowHeight);
    }

    onAppear() {
        this.resizeTo(this.boardSize);
    }

    resizeTo(boardSize: number) {
        this.boardSize = boardSize;
        this.removeAll();
        this.addTiles();
    }

    restore() {
        for (let tile of this.tiles)
            tile.restore();
    }

    setRowWidthAndHeight(rowWidth: number, rowHeight: number) {
        const adjustedRowHeight = rowHeight - SizeConstants.BoardRowHeightAdjust;
        this.setHeightPx(adjustedRowHeight);
        this.setMaxHeightPx(adjustedRowHeight);
        const widthWithoutMargins = rowWidth - (this.boardSize - 1) * SizeConstants.BoardTileRowSeparatorWidth;
        const tileWidth = widthWithoutMargins / this.boardSize;
        this.tiles.forEach((tile) => {
            tile.setTileWidthAndHeight(tileWidth, adjustedRowHeight);
        });
        console.log('BoardRow setRowWidthAndHeight', rowHeight, rowWidth);
    }

}

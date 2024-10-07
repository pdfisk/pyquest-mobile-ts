import { ActionConstants, ColorConstants, SizeConstants } from "../../constants";
import { ActionRec } from "../../handlers";
import { QxVBox } from "../../qx/mobile/container/QxVBox";
import { ResizeManager } from "../../util/ResizeManager";
import { StringUtil } from "../../util/StringUtil";
import { BoardRow } from "./BoardRow";
import { BoardTile } from "./BoardTile";

export class BoardPanel extends QxVBox {
    adjustedHeight: number = 0;
    adjustedWidth: number = 0;
    boardSize: number = 0;
    deferredActions: ActionRec[] = [];
    rows: BoardRow[] = [];
    tileMap: Map<string, BoardTile> = new Map;

    constructor(boardSize: number = 3) {
        super();
        this.resizeBoard(boardSize);
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardBackground);
        this.setBorderPx(ColorConstants.BoardBackground, SizeConstants.BoardTileRowSeparatorWidth);
    }

    addRow(rowIndex: number): BoardRow {
        const row = new BoardRow(this, rowIndex, this.boardSize);
        this.rows.push(row);
        this.add(row);
        return row;
    }

    addRows() {
        this.clear();
        this.rows = [];
        for (let rowIndex = 0; rowIndex < this.boardSize; rowIndex++) {
            const row = this.addRow(rowIndex);
            if (rowIndex < this.boardSize - 1)
                row.setMarginBottomPx(SizeConstants.BoardTileRowSeparatorWidth);
        }
        this.applyResize();
    }

    applyResize() {
        if (this.tileMap.size < this.boardSize * this.boardSize)
            return;
        const rowHeight = this.adjustedHeight / this.boardSize;
        const tileHeight = rowHeight - SizeConstants.BoardRowHeightAdjust;
        const widthWithoutMargins = this.adjustedWidth - (this.boardSize - 1) * SizeConstants.BoardTileRowSeparatorWidth;
        const tileWidth = widthWithoutMargins / this.boardSize;
        for (let tile of this.tileMap.values())
            tile.setTileWidthAndHeight(tileWidth, tileHeight);
    }

    buildTileMap() {
        this.tileMap.clear();
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                const tile = new BoardTile(this, row, col);
                this.registerTile(tile);
            }
        }
    }

    clear() {
        for (let tile of this.tileMap.values())
            tile.clear();
    }

    deferAction(actionRec: ActionRec) {
        this.deferredActions.push(actionRec);
    }

    getTile(row: number, column: number): BoardTile | undefined {
        return this.tileMap.get(StringUtil.tileMapKey(row, column));
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        super.onAppear();
        this.addRows();
        ResizeManager.getInstance().onResize();
        for (let actionRec of this.deferredActions)
            this.performAction(actionRec);
    }

    performAction(actionRec: ActionRec) {
        switch (actionRec.action) {
            case ActionConstants.ActionClear:
                this.performActionClear();
                break;
            case ActionConstants.ActionMoveTile:
                this.performActionMoveTile(actionRec.args);
                break;
            case ActionConstants.ActionSetSize:
                this.performActionSetSize(actionRec.args);
                break;
            case ActionConstants.ActionSetTileImage:
                this.performActionSetTileImage(actionRec.args);
                break;
            case ActionConstants.ActionSetTileText:
                this.performActionSetTileText(actionRec.args);
                break;
            default:
                console.log('performAction action not found', actionRec.action);
                break;
        }
    }

    performActionClear() {
        this.clear();
    }

    performActionMoveTile(args: any) {
        const row: number = args[0];
        const column: number = args[1];
        const direction: string = args[2];
        const tile_1 = this.getTile(row, column);
        if (!tile_1) return;
        const offset = tile_1.getOffset(direction);
        const tile_2 = this.getTile(offset.row, offset.column);
        if (!tile_2) return;
        tile_1.copy(tile_2);
    }

    performActionSetSize(args: any[]) {
        const newSize = args[0];
        if (this.boardSize == newSize)
            return;
        this.resizeBoard(newSize);
    }

    performActionSetTileImage(args: any[]) {
        const row = args[0];
        const column = args[1];
        const path = StringUtil.asImagePath(args[2]);
        const tile = this.getTile(row, column);
        if (!tile) return;
        tile.setImage(path);
    }

    performActionSetTileText(args: any[]) {
        const row = args[0];
        const column = args[1];
        const text = args[2];
        const tile = this.getTile(row, column);
        if (!tile) return;
        tile.setText(text);
    }

    registerTile(tile: BoardTile) {
        this.tileMap.set(tile.mapKey(), tile);
    }

    resizeBoard(boardSize: number) {
        this.boardSize = boardSize;
        this.removeAll();
        this.buildTileMap();
        if (this.hasAppeared)
            this.addRows();
    }

    restore() {
        for (let tile of this.tileMap.values())
            tile.restore();
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.adjustedWidth = adjustedWidth;
        this.adjustedHeight = adjustedHeight;
        this.applyResize();
    }

    setHeightPx(height: number) {
        console.log('BoardPanel setHeightPx', height);
        const heightWithoutMargins = height - (this.boardSize - 1) * SizeConstants.BoardTileRowSeparatorWidth;
        const rowHeight = heightWithoutMargins / this.boardSize;
        for (let row = 0; row < this.boardSize; row++)
            this.rows[row].setHeightPx(rowHeight);
    }

    setWidthPx(width: number) {
        console.log('BoardPanel setWidthPx', width);
        const widthWithoutMargins = width - (this.boardSize - 1);
        const rowWidth = widthWithoutMargins / this.boardSize;
        for (let row = 0; row < this.boardSize; row++)
            this.rows[row].setWidthPx(rowWidth);
    }

}

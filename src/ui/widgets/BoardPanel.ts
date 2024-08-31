import { ActionConstants } from '../../constants/ActionConstants';
import { ColorConstants } from '../../constants/ColorConstants';
import { ErrorConstants } from '../../constants/ErrorConstants';
import { LayoutConstants } from '../../constants/LayoutConstants';
import { ErrorHandler } from '../../handlers/ErrorHandler';
import { ActionRec } from '../../handlers/services/ActionRec';
import { QxGridLayout } from '../../qx/ui/layout/QxGridLayout';
import { AbstractPanel } from "./AbstractPanel";
import { BoardTile } from './BoardTile';

export class BoardPanel extends AbstractPanel {
    deferredActions: ActionRec[];
    layout?: QxGridLayout;
    size: number = 0;
    tileMap: Map<string, BoardTile> = new Map;

    constructor(size: number = 3) {
        super();
        this.deferredActions = [];
        this.setSize(size);
    }

    actionClear() {
        this.clear();
    }

    actionMoveTile(args: any[]) {
        if (args.length < 3) return;
        const row_1: number = args[0];
        const column_1: number = args[1];
        const direction: string = args[2];
        let count = 1;
        if (args.length > 3)
            count = args[3];
        let delay = 1;
        if (args.length > 4)
            delay = args[4];
        let row_2 = row_1;
        let column_2 = column_1;
        switch (direction) {
            case ActionConstants.MoveDirectionDown:
                row_2 += 1;
                break;
            case ActionConstants.MoveDirectionLeft:
                column_2 -= 1;
                break;
            case ActionConstants.MoveDirectionRight:
                column_2 += 1;
                break;
            case ActionConstants.MoveDirectionUp:
                row_2 -= 1;
                break;
        }
        const tile_1 = this.getTile(row_1, column_1);
        const tile_2 = this.getTile(row_2, column_2);
        if (tile_1 && tile_2)
            tile_1?.copy(tile_2);
    }

    actionSetSize(args: any[]) {
        const size: number = args[0];
        this.setSize(size);
        this.resize();
    }

    actionSetTileImage(args: any[]) {
        const row: number = args[0];
        const column: number = args[1];
        const fname: string = args[2];
        const tile: any = this.getTile(row, column);
        if (tile)
            tile.setImage(fname);
    }

    actionSetTileText(args: any[]) {
        const row: number = args[0];
        const column: number = args[1];
        const text: string = args[2];
        const tile: any = this.getTile(row, column);
        if (tile)
            tile.setLabel(text);
    }

    addTiles() {
        this.tileMap.clear();
        for (let i = 0; i < this.size; i++)
            this.layout?.setRowFlex(i, 1);
        for (let j = 0; j < this.size; j++)
            this.layout?.setColumnFlex(j, 1);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const tile = new BoardTile;
                this.tileMap.set(this.createRowColumnTag(i, j), tile);
                this.widget.add(tile.widget, { row: i, column: j });
            }
        }
        this.setMaxSizes();
    }

    clear() {
        this.getAllTiles().forEach(tile => { tile.clear(); });
    }

    createRowColumnTag(row: number, column: number): string {
        return `row:${row}column:${column}`;
    }

    defaultLayout(): QxGridLayout {
        this.layout = new QxGridLayout();
        this.layout.setSpacing(LayoutConstants.BoardGridSpacing);
        return this.layout;
    }

    deferAction(actionRec: ActionRec) {
        this.deferredActions.push(actionRec);
    }

    getAllTiles(): BoardTile[] {
        const tiles: BoardTile[] = [];
        for (let tile of this.tileMap.values())
            tiles.push(tile);
        return tiles;
    }

    getTile(row: number, column: number): BoardTile | undefined {
        const tag = this.createRowColumnTag(row, column);
        return this.tileMap.get(tag);
    }

    haveTilesAppeared(): boolean {
        if (this.tileMap.size === 0)
            return false;
        const tile = this.getTile(0, 0);
        return tile ? tile?.hasAppeared : false;
    }

    initialize() {
        super.initialize();
        for (let i = 0; i < this.size; i++) {
            this.layout?.setColumnFlex(i, 1);
            this.layout?.setRowFlex(i, 1);
        }
        this.setBackgroundColor(ColorConstants.BoardBackground);
    }

    onAppear() {
        super.onAppear();
        this.resize();
        this.deferredActions.forEach(actionRec => {
            this.performAction(actionRec);
        });
        this.deferredActions = [];
    }

    onResize() {
        this.setMaxSizes();
    }

    performAction(actionRec: ActionRec) {
        const action = actionRec.action;
        const args = actionRec.args;
        switch (action) {
            case ActionConstants.ActionClear:
                this.actionClear();
                break;
            case ActionConstants.ActionMoveTile:
                this.actionMoveTile(args);
                break;
            case ActionConstants.ActionSetSize:
                this.actionSetSize(args);
                break;
            case ActionConstants.ActionSetTileImage:
                this.actionSetTileImage(args);
                break;
            case ActionConstants.ActionSetTileText:
                this.actionSetTileText(args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.BoardHandlerMissingAction, action);
                break;
        }
    }

    resize() {
        this.removeAll();
        this.addTiles();
    }

    setMaxSizes() {
        const bounds = this.getBounds();
        const height = bounds.height;
        const width = bounds.width;
        const rowHeight = height / this.size;
        const columnWidth = width / this.size;
        for (let i = 0; i < this.size; i++)
            this.layout?.setRowMaxHeight(i, rowHeight);
        for (let j = 0; j < this.size; j++)
            this.layout?.setColumnMaxWidth(j, columnWidth);
    }

    setSize(size: number) {
        this.size = size;
    }

    setTile(row: number, column: number, text: string) {
        const tile = this.getTile(row, column);
        if (tile)
            tile.setLabel(text);
    }

}

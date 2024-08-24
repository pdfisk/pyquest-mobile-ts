import { ColorConstants } from '../../constants/ColorConstants';
import { LayoutConstants } from '../../constants/LayoutConstants';
import { QxGridLayout } from '../../qx/ui/layout/QxGridLayout';
import { AbstractPanel } from "./AbstractPanel";
import { BoardTile } from './BoardTile';

export class BoardPanel extends AbstractPanel {
    layout?: QxGridLayout;
    size: number = 0;
    tileMap: Map<string, BoardTile> = new Map;

    constructor(size: number = 3) {
        super();
        this.setSize(size);
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
                this.tileMap.set(this.getRowColumnTag(i, j), tile);
                this.widget.add(tile.widget, { row: i, column: j });
            }
        }
    }

    centerLabels() {
        for (let tile of this.tileMap.values())
            tile.centerChild();
    }

    clear() {
        this.getAllTiles().forEach(tile => { tile.clear(); });
    }

    defaultLayout(): QxGridLayout {
        this.layout = new QxGridLayout();
        this.layout.setSpacing(LayoutConstants.BoardGridSpacing);
        return this.layout;
    }

    getAllTiles(): BoardTile[] {
        const tiles: BoardTile[] = [];
        for (let tile of this.tileMap.values())
            tiles.push(tile);
        return tiles;
    }

    getRowColumnTag(row: number, column: number): string {
        return `row:${row}column:${column}`;
    }

    getRowColumnTile(row: number, column: number): BoardTile | undefined {
        return this.tileMap.get(this.getRowColumnTag(row, column));
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
        this.addTiles();
    }

    onResize() {
        this.centerLabels();
    }

    setSize(size: number) {
        this.size = size;
    }

}

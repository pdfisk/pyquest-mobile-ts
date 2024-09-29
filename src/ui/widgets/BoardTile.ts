import { ColorConstants, SizeConstants, StyleConstants } from "../../constants";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;
    cachedText: string = '';
    columnIndex: number;
    rowIndex: number;

    constructor(boardPanel: BoardPanel, rowIndex: number, columnIndex: number) {
        super('');
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.boardPanel.registerTile(this);
    }

    cacheAndRelease() {
        this.cachedText = this.getLabel();
        this.clear();
        super.unlockMaxAndMin();
    }

    clear() {
        this.setLabel('');
    }

    copy(destTile: BoardTile) {
    }

    getImage() {
    }

    getOffset(direction: string) {
    }

    handlesOnAppear(): boolean {
        return true;
    }

    handlesOnClick(): boolean {
        return true;
    }

    hideImage() {
    }

    hideLabel() {
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    mapKey(): string {
        return `tile-${this.rowIndex}-${this.columnIndex}`;
    }

    onAppear() {
        super.onAppear();
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitScaleDown);
        this.setLabelStyle(StyleConstants.FontWeight, StyleConstants.FontWeightBold);
        this.setLabelStyle(StyleConstants.Height, SizeConstants.Size100Pct);
        this.clear();
        this.onResize();
        if (this.rowIndex == 1 && this.columnIndex == 1) {
            this.setText('X');
            (window as any).X = this;
        }
    }

    onClick() {
        console.log('tile onClick', this);
    }

    onResize() {
        this.setLabelStyle(StyleConstants.LineHeight, this.getHeight());
    }

    postEvent() {
    }

    restore() {
        this.setLabel(this.cachedText);
    }

    saveValue() {
    }

    setImage(image_name_arg: string) {
    }

    setText(text: string) {
        this.cacheAndRelease();
        this.cachedText = text;
        this.lockMaxAndMin();
        this.restore();
    }

    showImage() {
    }

    showText() {
    }

}

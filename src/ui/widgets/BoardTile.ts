import { ColorConstants, StyleConstants } from "../../constants";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;
    columnIndex: number;
    rowIndex: number;
    savedText:string = '';

    constructor(boardPanel: BoardPanel, rowIndex: number, columnIndex: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.boardPanel.registerTile(this);
    }

    clear() {
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

    lockMaxAndMin() {
        // this.setLabel(this.savedText);
        // super.lockMaxAndMin();
    }

    mapKey(): string {
        return `tile-${this.rowIndex}-${this.columnIndex}`;
    }

    onAppear() {
        super.onAppear();
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitScaleDown);
        this.setLabelStyle(StyleConstants.FontWeight, StyleConstants.FontWeightBold);
        this.resize();
        this.clear();
        if (this.rowIndex == 1 && this.columnIndex == 1) {
            (window as any).X = this;
            this.setText('X');
        }
    }

    onClick() {
        console.log('tile onClick', this);
    }

    postEvent() {
    }

    resize() {
    }

    restoreValue() {
    }

    saveValue() {
    }

    setImage(image_name_arg: string) {
    }

    showImage() {
    }

    showText() {
    }

    unlockMaxAndMin() {
        // this.savedText = this.getLabel();
        // this.clear();
        // super.unlockMaxAndMin();
    }

}

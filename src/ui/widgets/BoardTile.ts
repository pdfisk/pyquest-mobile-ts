import { ColorConstants } from "../../constants";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;
    columnIndex: number;
    rowIndex: number;

    constructor(boardPanel: BoardPanel, rowIndex: number, columnIndex: number) {
        super();
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        if (rowIndex == 1 && columnIndex == 1)
            (window as any).X = this;
    }

    clear() {
    }

    copy(destTile: BoardTile) {
    }

    getImage() {
    }

    getOffset(direction: string) {
    }

    getShow() {
    }

    hideImage() {
    }

    hideText() {
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    onAppear() {
    }

    onClick() {
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

    setText(text: string) {
    }

    showImage() {
    }

    showText() {
    }

}

import { ColorConstants } from "../../constants";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;

    constructor(boardPanel: BoardPanel, rowIndex:number, rowColumn:number) {
        super(rowIndex, rowColumn);
        this.boardPanel = boardPanel;
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

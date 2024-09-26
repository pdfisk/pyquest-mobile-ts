import { QxComposite } from "../../qx/mobile/container/QxComposite";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxComposite {
    boardPanel: BoardPanel;

    constructor(boardPanel: BoardPanel) {
        super();
        this.boardPanel = boardPanel;
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor('#ccc');
    }


}

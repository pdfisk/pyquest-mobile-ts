import { ColorConstants } from "../../constants";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;

    constructor(boardPanel: BoardPanel) {
        super();
        this.boardPanel = boardPanel;
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    setImage(image_name_arg: string) {
    }

}

import { SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./AbstractPage";

export class BoardPage extends AbstractPage {
    boardPanel: BoardPanel;
    deferredHeight: number = 0;
    static instance: BoardPage;

    static getInstance(): BoardPage {
        if (!this.instance)
            this.instance = new BoardPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.boardPanel = new BoardPanel;
        this.setTitle(LabelConstants.PageBoard);
    }

    addContent() {
        this.addContentWidget(this.boardPanel);
    }

    resizeHeight(height: number) {
        if (this.boardPanel)
            this.setBoardPanelHeight(height);
        else
            this.deferredHeight = height;
    }

    setBoardPanelHeight(height: number) {
        const adjustedHeight = height - SizeConstants.ButtonBarButtonHeight - SizeConstants.ButtonBarHeightOffset;
        this.boardPanel.setHeightPx(adjustedHeight);
    }

}

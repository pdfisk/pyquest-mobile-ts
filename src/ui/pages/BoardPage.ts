import { SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./AbstractPage";

export class BoardPage extends AbstractPage {
    boardPanel?: BoardPanel = undefined;
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

    isContentReady(): boolean {
        return this.boardPanel !== undefined;
    }

    resizeHeight(height: number) {
        if (this.isContentReady())
            this.setAdjustedHeight(height - SizeConstants.ButtonBarButtonHeight - SizeConstants.ButtonBarHeightOffset);
        else
            this.deferredHeight = height;
    }

    setAdjustedHeight(adjustedHeight: number) {
        this.setBoardPanelHeight(adjustedHeight);
    }

    setBoardPanelHeight(adjustedHeight: number) {
        this.boardPanel?.setHeightPx(adjustedHeight);
    }

}

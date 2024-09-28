import { LabelConstants } from "../../constants/LabelConstants";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./AbstractPage";

export class BoardPage extends AbstractPage {
    boardPanel: BoardPanel;
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
        return this.boardPanel instanceof BoardPanel;
    }

    lockAllMaxAndMin() {
        this.boardPanel?.lockAllMaxAndMin();
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setBoardPanelHeight(adjustedHeight);
    }

    setAdjustedWidth(adjustedWidth: number): void {
        this.setBoardPanelWidth(adjustedWidth);
    }

    setBoardPanelHeight(adjustedHeight: number) {
        console.log('setBoardPanelHeight', adjustedHeight);
        this.boardPanel?.setHeightPx(adjustedHeight);
    }

    setBoardPanelWidth(adjustedWidth: number) {
        console.log('setBoardPanelWidth', adjustedWidth);
        this.boardPanel?.setWidthPx(adjustedWidth);
    }

    unlockAllMaxAndMin() {
        this.boardPanel?.unlockAllMaxAndMin();
    }

}

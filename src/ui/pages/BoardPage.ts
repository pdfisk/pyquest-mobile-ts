import { LabelConstants } from "../../constants/LabelConstants";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./AbstractPage";

export class BoardPage extends AbstractPage {
    boardPanel: BoardPanel;
    static instance: BoardPage;

    static getBoardPanel(): BoardPanel {
        return this.getInstance().boardPanel;
    }

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

    cacheAndRelease() {
        this.boardPanel?.cacheAndRelease();
    }

    isContentReady(): boolean {
        return this.boardPanel instanceof BoardPanel;
    }

    lockMaxAndMin() {
        this.boardPanel?.lockMaxAndMin();
    }

    resize() {
        super.resize();
        this.boardPanel.onResize();
    }

    restore() {
        this.boardPanel?.restore();
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setBoardPanelHeight(adjustedHeight);
    }

    setAdjustedWidth(adjustedWidth: number): void {
        this.setBoardPanelWidth(adjustedWidth);
    }

    setBoardPanelHeight(adjustedHeight: number) {
        this.boardPanel?.setHeightPx(adjustedHeight);
    }

    setBoardPanelWidth(adjustedWidth: number) {
        this.boardPanel?.setWidthPx(adjustedWidth);
    }

}

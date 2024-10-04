import { SizeConstants } from "../../constants";
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

    isContentReady(): boolean {
        return this.boardPanel instanceof BoardPanel;
    }

    // lockMaxValues() {
    //     this.boardPanel?.lockMaxValues();
    // }

    // resize() {
    //     super.resize();
    //     this.boardPanel.onResize();
    // }

    resizeHeight(height: number) {
        console.log('BoardPanel resizeHeight', height);
    }

    resizeWidth(width: number) {
        console.log('BoardPanel resizeWidth', width);
    }

    restore() {
        this.boardPanel?.restore();
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setBoardPanelHeight(adjustedHeight);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
        this.boardPanel.setAdjustedWidthAndHeight(adjustedWidth, adjustedHeight - SizeConstants.BoardPanelHeightAdjust);
    }

    setBoardPanelHeight(adjustedHeight: number) {
        this.boardPanel?.setHeightPx(adjustedHeight);
    }

    setBoardPanelWidth(adjustedWidth: number) {
        this.boardPanel?.setWidthPx(adjustedWidth);
    }

}

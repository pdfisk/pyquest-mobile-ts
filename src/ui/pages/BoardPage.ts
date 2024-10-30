import { EventConstants, SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./abstract/AbstractPage";

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
        MessageBus.subscribe(EventConstants.BoardClear, this.boardPanel.clear, this.boardPanel);
    }

    addContent() {
        this.addContentWidget(this.boardPanel);
    }

    isContentReady(): boolean {
        return this.boardPanel instanceof BoardPanel;
    }

    resizeHeight(height: number) {
        console.log('BoardPanel resizeHeight', height);
    }

    resizeWidth(width: number) {
        console.log('BoardPanel resizeWidth', width);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
        this.boardPanel.setAdjustedWidthAndHeight(adjustedWidth, adjustedHeight - SizeConstants.BoardPanelHeightAdjust);
    }

}

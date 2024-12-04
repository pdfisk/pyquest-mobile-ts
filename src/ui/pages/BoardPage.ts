import { QxButton } from "../../../dist/mobile";
import { ActionConstants, EventConstants, SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { BoardPanel } from "../widgets/BoardPanel";
import { AbstractPage } from "./abstract/AbstractPage";

export class BoardPage extends AbstractPage {
    boardPanel: BoardPanel;
    name:string = '';
    stopButton: QxButton | null = null;
    static instance: BoardPage;

    static getBoardPanel(): BoardPanel {
        return this.getInstance().boardPanel;
    }

    static getInstance(): BoardPage {
        if (!this.instance)
            this.instance = new BoardPage();
        return this.instance;
    }

    static setName(name:string) {
        this.getInstance().setName(name);
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

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelDetails,
            LabelConstants.ButtonLabelStop
        ];
    }

    isContentReady(): boolean {
        return this.boardPanel instanceof BoardPanel;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.stopButton = this.buttonbar.getButtonFromLabel(LabelConstants.ButtonLabelStop);
    }

    onClear() {
        this.boardPanel.clear();
    }

    onDetails() {
        console.log('BoardPage onDetails');
    }

    onStop() {
        console.log('BoardPage onStop');
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionDetails:
                this.onDetails();
                break;
            case ActionConstants.ActionStop:
                this.onStop();
                break;
            default:
                console.log('BoardPage onTap', action);
                break;
        }
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

    setName(name: string) {
        this.name = name;
        if (this.name.length > 0)
            this.setTitle(`${LabelConstants.PageBoard} (${name})`);
        else
            this.setTitle(LabelConstants.PageBoard);
    }

}

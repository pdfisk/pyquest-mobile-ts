import { VmApi } from "../../api";
import { ColorConstants, EventConstants, FontConstants, StyleConstants } from "../../constants";
import { MessageBus } from "../../messages";
import { QxAtom } from "../../qx/mobile/basic/QxAtom";
import { StringUtil } from "../../util/StringUtil";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;
    cachedPath: string = '';
    cachedText: string = '';
    columnIndex: number;
    rowIndex: number;

    constructor(boardPanel: BoardPanel, rowIndex: number, columnIndex: number) {
        super('');
        this.boardPanel = boardPanel;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }

    cacheAndRelease() {
        this.cachedText = this.getLabel();
        this.clear();
        super.unlockMaxAndMin();
    }

    clear() {
        this.setLabel('');
    }

    copy(destTile: BoardTile) {
    }

    handlesOnAppear(): boolean {
        return true;
    }

    handlesOnClick(): boolean {
        return true;
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    lockMaxAndMin() {
        super.lockMaxAndMin();
        this.setLineHeight(this.getHeight());
    }

    mapKey(): string {
        return StringUtil.tileMapKey(this.rowIndex, this.columnIndex);
    }

    onAppear() {
        super.onAppear();
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitScaleDown);
        this.setLabelStyle(FontConstants.FONT_FAMILY, FontConstants.FontFamilyMonospace);
        this.setLabelStyle(FontConstants.FONT_WEIGHT, FontConstants.FontWeightBold);
        this.setLabelStyle(FontConstants.FONT_SIZE, FontConstants.FontSize2_5Em);
        const height = this.getHeight();
        const width = this.getWidth();
        this.setMaxHeight(height);
        this.setMaxWidth(width);
        this.setLabelLineHeightStyle(height);
        if (this.cachedText.length > 0)
            this.setLabel(this.cachedText);
        if (this.cachedPath.length > 0)
            this.setIcon(this.cachedPath);
    }

    onClick() {
        console.log('tile onClick', this);
        this.postEvent();
    }

    onResize() {
        this.setLabelStyle(StyleConstants.LineHeight, this.getHeight());
    }

    postEvent() {
        const eventName = EventConstants.BoardTileClicked;
        const args = [this.rowIndex, this.columnIndex, this.getLabel()];
        MessageBus.dispatch(eventName, args);
        VmApi.postEvent(eventName, args);
    }

    restore() {
        this.setLabel(this.cachedText);
    }

    saveValue() {
    }

    setImage(path: string) {
        this.cacheAndRelease();
        if (this.hasAppeared) {
            this.lockMaxAndMin();
            this.setIcon(path);
        }
        else
            this.cachedPath = path;
    }
    
    setText(text: string) {
        this.cacheAndRelease();
        if (this.hasAppeared) {
            this.lockMaxAndMin();
            this.setLabel(text);
        }
        else
            this.cachedText = text;
    }

}

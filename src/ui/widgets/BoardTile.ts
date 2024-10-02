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
        this.cachedPath = this.getIcon();
        this.cachedText = this.getLabel();
        this.clear();
        super.unlockMaxAndMin();
    }

    clear() {
        this.setIcon('');
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
        console.log('lockMaxAndMin', this.getHeight(), this.getWidth());
        this.setLineHeight(this.getHeight());
        this.setIconStyles();
    }

    mapKey(): string {
        return StringUtil.tileMapKey(this.rowIndex, this.columnIndex);
    }

    onAppear() {
        super.onAppear();
        const height = this.getHeight();
        const width = this.getWidth();
        this.setMaxHeight(height);
        this.setMaxWidth(width);
        this.setLabelStyle(FontConstants.FONT_FAMILY, FontConstants.FontFamilyMonospace);
        this.setLabelStyle(FontConstants.FONT_WEIGHT, FontConstants.FontWeightBold);
        this.setLabelStyle(FontConstants.FONT_SIZE, FontConstants.FontSize2_5Em);
        this.setLabelLineHeightStyle(height);
        this.setIconStyles();
        this.restore();
    }

    onClick() {
        console.log('tile onClick', this);
        this.postEvent();
    }

    onResize() {
        console.log('onResize', this.getHeight(), this.getWidth());
        this.setLabelStyle(StyleConstants.LineHeight, this.getHeight());
        this.setIconStyles();
        this.restore();
    }

    postEvent() {
        const eventName = EventConstants.BoardTileClicked;
        const args = [this.rowIndex, this.columnIndex, this.getLabel()];
        MessageBus.dispatch(eventName, args);
        VmApi.postEvent(eventName, args);
    }

    restore() {
        if (this.cachedText && this.cachedText.length > 0)
            this.setLabel(this.cachedText);
        if (this.cachedPath && this.cachedPath.length > 0)
            this.setImage(this.cachedPath);
    }

    saveValue() {
    }

    setIconStyles() {
        const height = this.getHeight();
        const width = this.getWidth();
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitContain);
        this.setIconStyle(StyleConstants.Height, height);
        this.setIconStyle(StyleConstants.MaxHeight, height);
        this.setIconStyle(StyleConstants.Width, width);
        this.setIconStyle(StyleConstants.MaxWidth, width);
    }

    setImage(path: string) {
        console.log('setImage', path);
        (window as any).X = this;
        this.cacheAndRelease();
        if (this.hasAppeared) {
            this.lockMaxAndMin();
            this.setIcon(path);
            this.showImage();
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

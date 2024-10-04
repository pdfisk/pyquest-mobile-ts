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
        this.hideImage();
        this.hideText();
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

    lockTileMaxValues(tileWidth: number, tileHeight: number) {
        console.log('BoardTile lockMaxValues', tileWidth, tileHeight);
        this.setLineHeightPx(tileHeight);
        this.setHeightPx(tileHeight);
        this.setMaxHeightPx(tileHeight);
        this.setWidthPx(tileWidth);
        this.setMaxWidthPx(tileWidth);
        this.setIconHeightPx(tileHeight);
        this.setIconMaxHeightPx(tileHeight);
        this.setIconWidthPx(tileWidth);
        this.setIconMaxWidthPx(tileWidth);
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
        this.restore();
    }

    onClick() {
        console.log('tile onClick', this);
        this.postEvent();
    }

    onResize() {
        this.setLabelStyle(StyleConstants.LineHeight, this.getHeight());
        this.restore();
    }

    postEvent() {
        const eventName = EventConstants.BoardTileClicked;
        const args = [this.rowIndex, this.columnIndex, this.getLabel()];
        MessageBus.dispatch(eventName, args);
        VmApi.postEvent(eventName, args);
    }

    restore() {
        this.restoreImage();
        this.restoreLabel();
    }

    restoreImage() {
        if (this.cachedPath && this.cachedPath.length > 0)
            this.setImage(this.cachedPath);
    }

    restoreLabel() {
        if (this.cachedText && this.cachedText.length > 0)
            this.setLabel(this.cachedText);
    }

    saveValue() {
    }

    setIconStyles(tileWidth: number, tileHeight: number) {
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitContain);
        this.setIconStyle(StyleConstants.Height, StringUtil.asPixels(tileHeight));
        this.setIconStyle(StyleConstants.MaxHeight, StringUtil.asPixels(tileHeight));
        this.setIconStyle(StyleConstants.Width, StringUtil.asPixels(tileWidth));
        this.setIconStyle(StyleConstants.MaxWidth, StringUtil.asPixels(tileWidth));
    }

    setImage(path: string) {
        (window as any).X = this;
        this.cacheAndRelease();
        if (this.hasAppeared) {
            this.lockMaxValues();
            this.setIcon(path);
            this.showImage();
        }
        else
            this.cachedPath = path;
    }

    setText(text: string) {
        this.cacheAndRelease();
        if (this.hasAppeared) {
            this.lockMaxValues();
            this.setLabel(text);
        }
        else
            this.cachedText = text;
    }

    setTileWidthAndHeight(width: number, height: number) {
        this.setWidthPx(width);
        this.setMaxWidthPx(width);
        this.setHeightPx(height);
        this.setMaxHeightPx(height);
        if (this.rowIndex == 1 && this.columnIndex == 1)
            (window as any).X = this;
    }

}

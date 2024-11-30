import { VmApi } from "../../api";
import { ActionConstants, ColorConstants, EventConstants, FontConstants, QxConstants, StyleConstants } from "../../constants";
import { DeferredConstants } from "../../constants/DeferredConstants";
import { MessageBus } from "../../messages";
import { QxAtom } from "../../qx/ui/mobile/basic/QxAtom";
import { DeferredCommand } from "../../util/DeferredCommand";
import { StringUtil } from "../../util/StringUtil";
import { BoardPanel } from "./BoardPanel";

export class BoardTile extends QxAtom {
    boardPanel: BoardPanel;
    cachedPath: string = '';
    cachedText: string = '';
    columnIndex: number;
    deferredCommands: DeferredCommand[];
    rowIndex: number;
    tileHeight: number = 0;
    tileWidth: number = 0;

    constructor(boardPanel: BoardPanel, rowIndex: number, columnIndex: number) {
        super('');
        this.boardPanel = boardPanel;
        this.deferredCommands = [];
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }

    applyDeferredCommands() {
        this.deferredCommands.forEach((cmd) => {
            cmd.apply(this);
        });
    }

    applyTileWidthAndHeight() {
        if (this.tileWidth === 0 || this.tileHeight === 0)
            return;
        this.setWidthPx(this.tileWidth);
        this.setMaxWidthPx(this.tileWidth);
        this.setHeightPx(this.tileHeight);
        this.setMaxHeightPx(this.tileHeight);
        this.setLabelWidthPx(this.tileWidth);
        this.setLabelMaxWidthPx(this.tileWidth);
        this.setLabelLineHeightPx(this.tileHeight);
        this.setLabelHeightPx(this.tileHeight);
        this.setLabelMaxHeightPx(this.tileHeight);
        this.setIconHeightPx(this.tileHeight);
        this.setIconMaxHeightPx(this.tileHeight);
        this.setIconWidthPx(this.tileWidth);
        this.setIconMaxWidthPx(this.tileWidth);
    }

    clear() {
        if (!this.hasAppeared) {
            this.pushDeferredCommand(DeferredConstants.Clear);
            return;
        }
        this.hideImage();
        this.hideText();
    }

    copy(destTile: BoardTile) {
        if (!this.hasAppeared) {
            this.pushDeferredCommand(DeferredConstants.Copy, destTile);
            return;
        }
        switch (this.getShow()) {
            case QxConstants.AtomShowIcon:
                destTile.setImage(this.getIcon());
                this.clear();
                break;
            case QxConstants.AtomShowLabel:
                destTile.setText(this.getLabel());
                this.clear();
                break;
            default:
                console.log('BoardTile copy', this.getShow());
                break;
        }
    }

    getOffset(direction: string): any {
        let row = this.rowIndex;
        let column = this.columnIndex;
        switch (direction) {
            case ActionConstants.MoveDirectionDown:
                row++;
                break;
            case ActionConstants.MoveDirectionLeft:
                column--;
                break;
            case ActionConstants.MoveDirectionRight:
                column++;
                break;
            case ActionConstants.MoveDirectionUp:
                row--;
                break;
            default:
                console.log('BoardTile getOffset', direction);
                break;
        }
        return { row: row, column: column };
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
        this.setIconStyles();
        this.setLabelStyles();
        this.applyDeferredCommands();
    }

    onClick() {
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

    pushDeferredCommand(cmd: string, ...args: any[]) {
        this.deferredCommands.push(new DeferredCommand(cmd, args));
    }

    restore() {
        this.restoreImage();
        this.restoreLabel();
    }

    restoreImage() {
        if (this.cachedPath && this.cachedPath.length > 0) {
            this.setImage(this.cachedPath);
            this.showImage();
        }
    }

    restoreLabel() {
        if (this.cachedText && this.cachedText.length > 0) {
            this.setLabel(this.cachedText);
            this.showText();
        }
    }

    saveValue() {
    }

    setIconStyles() {
        this.setIconStyle(StyleConstants.ObjectFit, StyleConstants.ObjectFitContain);
        this.setIconStyle(StyleConstants.Height, StringUtil.asPixels(this.tileHeight));
        this.setIconStyle(StyleConstants.MaxHeight, StringUtil.asPixels(this.tileHeight));
        this.setIconStyle(StyleConstants.Width, StringUtil.asPixels(this.tileWidth));
        this.setIconStyle(StyleConstants.MaxWidth, StringUtil.asPixels(this.tileWidth));
    }

    setLabelStyles() {
        this.setLabelStyle(FontConstants.FONT_FAMILY, FontConstants.FontFamilyMonospace);
        this.setLabelStyle(FontConstants.FONT_WEIGHT, FontConstants.FontWeightBold);
        this.setLabelStyle(FontConstants.FONT_SIZE, FontConstants.FontSize2_5Em);
        this.setLabelStyle(StyleConstants.Height, StringUtil.asPixels(this.tileHeight));
        this.setLabelStyle(StyleConstants.MaxHeight, StringUtil.asPixels(this.tileHeight));
        this.setLabelStyle(StyleConstants.MaxWidth, StringUtil.asPixels(this.tileWidth));
        this.setLabelStyle(StyleConstants.TextAlign, StyleConstants.TextAlignCenter);
        this.setLabelStyle(StyleConstants.Width, StringUtil.asPixels(this.tileWidth));
    }

    setImage(path: string) {
        if (!this.hasAppeared) {
            this.pushDeferredCommand(DeferredConstants.SetImage, path);
            return;
        }
        this.showImage();
        this.setIcon(path);
    }

    setText(text: string) {
        if (!this.hasAppeared) {
            this.pushDeferredCommand(DeferredConstants.SetText, text);
            return;
        }
        this.showText();
        this.setLabel(text);
    }

    setTileWidthAndHeight(width: number, height: number) {
        this.tileWidth = width;
        this.tileHeight = height;
        this.applyTileWidthAndHeight();
    }

}

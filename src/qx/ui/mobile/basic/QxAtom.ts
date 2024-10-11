import { QxConstants, StyleConstants } from "../../../../constants";
import { StringUtil } from "../../../../util/StringUtil";
import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxAtom extends QxWidget {
    imageName: string;
    savedValue: string;

    constructor(widget: any = null) {
        super(widget ? widget : QxFactory.mobileAtom());
        this.imageName = '';
        this.savedValue = '';
    }

    getIcon(): string {
        return this.widget.getIcon();
    }

    getIconWidget(): any {
        return this.widget.getIconWidget();
    }

    getLabel(): string {
        return this.widget.getLabel();
    }

    getLabelWidget(): any {
        return this.widget.getLabelWidget();
    }

    getShow(): string {
        return this.widget.getShow();
    }

    hideImage() {
        this.getIconWidget().hide();
    }

    hideText() {
        this.getLabelWidget().hide();
    }

    setIcon(iconPath: string) {
        this.widget.setIcon(iconPath);
    }

    setIconHeight(height: string) {
        this.setIconStyle(StyleConstants.Height, height);
    }

    setIconHeightPx(height: number) {
        this.setIconHeight(StringUtil.asPixels(height));
    }

    setIconMaxHeight(height: string) {
        this.setIconStyle(StyleConstants.MaxHeight, height);
    }

    setIconMaxHeightPx(height: number) {
        this.setIconMaxHeight(StringUtil.asPixels(height));
    }

    setIconMaxWidth(width: string) {
        this.setIconStyle(StyleConstants.MaxWidth, width);
    }

    setIconMaxWidthPx(width: number) {
        this.setIconMaxWidth(StringUtil.asPixels(width));
    }

    setIconStyle(key: string, value: string) {
        const widget = this.getIconWidget();
        if (widget)
            widget._setStyle(key, value);
    }

    setIconWidth(width: string) {
        this.setIconStyle(StyleConstants.Width, width);
    }

    setIconWidthPx(width: number) {
        this.setIconWidth(StringUtil.asPixels(width));
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

    setLabelHeight(height: string) {
        this.setLabelStyle(StyleConstants.Height, height);
    }

    setLabelHeightPx(height: number) {
        this.setLabelHeight(StringUtil.asPixels(height));
    }

    setLabelLineHeightPx(value: number) {
        this.setLabelLineHeightStyle(StringUtil.asPixels(value));
    }

    setLabelLineHeightStyle(value: string) {
        this.setLabelStyle(StyleConstants.LineHeight, value);
    }

    setLabelMaxHeight(height: string) {
        this.setLabelStyle(StyleConstants.MaxHeight, height);
    }

    setLabelMaxHeightPx(height: number) {
        this.setLabelMaxHeight(StringUtil.asPixels(height));
    }

    setLabelMaxWidth(width: string) {
        this.setLabelStyle(StyleConstants.MaxWidth, width);
    }

    setLabelMaxWidthPx(width: number) {
        this.setLabelMaxWidth(StringUtil.asPixels(width));
    }

    setLabelStyle(key: string, value: string) {
        const widget = this.getLabelWidget();
        if (widget)
            widget._setStyle(key, value);
    }

    setLabelWidth(width: string) {
        this.setLabelStyle(StyleConstants.Width, width);
    }

    setLabelWidthPx(width: number) {
        this.setLabelWidth(StringUtil.asPixels(width));
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

    setText(text: string) {
        this.setShow(QxConstants.AtomShowLabel);
        this.setLabel(text);
        this.hideImage();
        this.showText();
    }

    showImage() {
        this.setShow(QxConstants.AtomShowIcon);
        this.getIconWidget().show();
    }

    showText() {
        this.setShow(QxConstants.AtomShowLabel);
        this.getLabelWidget().show();
    }

}

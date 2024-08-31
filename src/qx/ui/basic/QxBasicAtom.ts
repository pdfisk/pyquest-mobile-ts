import { StyleConstants } from "../../../constants/StyleConstants";
import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicAtom extends QxWidget {

    constructor(widget?: any) {
        if (!widget) widget = QxFactory.basicAtom();
        super(widget);
        this.setCenter(true);
        this.setRich(true);
    }

    clear() {
        this.resetIcon();
        this.resetLabel();
    }

    getFirstChild(): any {
        const children = this.widget._getChildren();
        if (children.length === 0) return null;
        return children[0];
    }

    getIcon(): string {
        return this.widget.getIcon();
    }

    getLabel(): string {
        return this.widget.getLabel();
    }

    getShow(): string {
        return this.widget.getShow();
    }

    resetIcon() {
        this.widget.resetIcon();
    }

    resetLabel() {
        this.widget.resetLabel();
    }

    setCenter(value: boolean) {
        this.widget.setCenter(value);
    }

    setChildSize() {
        const width = this.widget.getMaxWidth();
        const height = this.widget.getMaxHeight();
        const child = this.getFirstChild();
        if (!child) return;
        child.setWidth(width * StyleConstants.ImagePercentSize);
        child.setHeight(height * StyleConstants.ImagePercentSize);
    }

    setIcon(path: string) {
        this.resetLabel();
        this.widget.setIcon(path);
        this.setIconStyle();
        this.setChildSize();
    }

    setIconStyle() {
        const image = this.getFirstChild();
        image.setScale(true);
        image.setForceRatio(true);
    }

    setLabel(label: string) {
        if (!this.widget) return;
        this.resetIcon();
        const html = `<span style="font-size:24px;font-family:monospace,sans">${label}</span>`;
        this.widget.setLabel(html);
    }

    setRich(value: boolean) {
        this.widget.setRich(value);
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

}

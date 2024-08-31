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

    setCenter(value:boolean) {
        this.widget.setCenter(value);
    }

    setIcon(path: string) {
        this.resetLabel();
        this.widget.setIcon(path);
    }

    setLabel(label: string) {
        if (!this.widget) return;
        this.resetIcon();
        const html = `<span style="font-size:24px;font-family:monospace,sans">${label}</span>`;
        this.widget.setLabel(html);
    }

    setRich(value:boolean) {
        this.widget.setRich(value);
    }

    setShow(show: string) {
        this.widget.setShow(show);
    }

}

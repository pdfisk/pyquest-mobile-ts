import { SizeConstants, StyleConstants } from "../../../constants";
import { ResizeManager } from "../../../util/ResizeManager";
import { QxFactory } from "../../factory";
import { QxRoot } from "../core/QxRoot";
import { QxPage } from "./QxPage";

export class QxNavigationPage extends QxPage {

    constructor() {
        super(QxFactory.mobileNavigationPage());
        ResizeManager.subscribe(this);
    }

    addContent() {
    }

    addContentWidget(child: any) {
        this.getContent().add(child.widget);
    }

    getContent(): any {
        return this.widget.getContent();
    }

    getContentElement(): any {
        return this.getContent().getContentElement();
    }

    getTitle(): string {
        return this.widget.getTitle();
    }

    lockAllMaxAndMin() {
    }

    onAppear() {
        this.addContent();
        this.resize();
    }

    onOrientation() {
        this.resize();
    }

    onResize() {
        this.resize();
    }

    resize() {
        this.unlockAllMaxAndMin();
        this.resizeHeight(QxRoot.getHeight());
        this.resizeWidth(QxRoot.getWidth());
        this.lockAllMaxAndMin();
    }

    resizeHeight(height: number) {
    }

    resizeWidth(width: number) {
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

    unlockAllMaxAndMin() {
    }

}

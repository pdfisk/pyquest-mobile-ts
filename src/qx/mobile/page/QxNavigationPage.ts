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

    cacheAndRelease() {
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

    lockMaxValues() {
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
        this.resizeHeight(QxRoot.getHeight());
        this.resizeWidth(QxRoot.getWidth());
        // this.lockMaxValues();
        // this.restore();
    }

    resizeHeight(height: number) {
    }

    resizeWidth(width: number) {
    }

    restore() {
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

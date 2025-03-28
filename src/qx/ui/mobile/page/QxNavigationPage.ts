import { ResizeManager } from "../../../../util/ResizeManager";
import { QxFactory } from '../../../factory/QxFactory';
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

    onAppear() {
        super.onAppear();
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
        this.resizeWidthAndHeight(QxRoot.getWidth(), QxRoot.getHeight());
    }

    resizeWidthAndHeight(width: number, height: number) {
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

    showBackButton(value: boolean) {
        this.widget.showBackButton(value);
    }

}

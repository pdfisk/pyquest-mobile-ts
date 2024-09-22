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

    getTitle(): string {
        return this.widget.getTitle();
    }

    onAppear() {
        this.addContent();
        this.resize();
    }

    onOrientation() {
        console.log('onOrientation');
    }

    onResize() {
        this.resize();
    }

    resize() {
        const height = QxRoot.getHeight();
        this.resizeHeight(height);
    }

    resizeHeight(height: number) {
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

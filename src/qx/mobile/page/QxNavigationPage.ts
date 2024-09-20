import { ResizeManager } from "../../../util/ResizeManager";
import { QxFactory } from "../../factory";
import { QxMobileRoot } from "../core/QxMobileRoot";
import { QxPage } from "./QxPage";

export class QxNavigationPage extends QxPage {

    constructor() {
        super(QxFactory.mobileNavigationPage());
        ResizeManager.subscribe(this);
    }

    addContent() {
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
        const height = QxMobileRoot.getHeight();
        console.log('resize', height);
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

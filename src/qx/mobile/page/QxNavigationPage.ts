import { ResizeManager } from "../../../util/ResizeManager";
import { QxFactory } from "../../factory";
import { QxPage } from "./QxPage";

export class QxNavigationPage extends QxPage {

    constructor() {
        super(QxFactory.mobileNavigationPage());
        ResizeManager.subscribe(this);
    }

    getTitle(): string {
        return this.widget.getTitle();
    }

    onOrientation() {
console.log('onOrientation');
    }

    onResize() {
        console.log('onResize');
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

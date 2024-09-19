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

    onResize(width: number, height: number) {
        console.log('onResize', width, height);
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

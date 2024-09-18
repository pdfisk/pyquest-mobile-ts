import { QxFactory } from "../../factory";
import { QxPage } from "./QxPage";

export class QxNavigationPage extends QxPage {

    constructor() {
        super(QxFactory.mobileNavigationPage());
    }

    getTitle(): string {
        return this.widget.getTitle();
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

import { QxFactory } from "../../factory";
import { QxPage } from "./QxPage";

export class QxNavigationPage extends QxPage {

    constructor() {
        super(QxFactory.mobileNavigationPage());
    }

    setTitle(title: string) {
        this.widget.setTitle(title);
    }

}

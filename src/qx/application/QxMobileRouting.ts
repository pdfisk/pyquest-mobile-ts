import { AbstractPage } from "../../ui/pages/AbstractPage";
import { QxObject } from "../core";
import { QxMobileApplication } from "./QxMobileApplication";

export class QxMobileRouting extends QxObject {

    static instance: QxMobileRouting;

    static getInstance(): QxMobileRouting {
        if (!this.instance)
            this.instance = new QxMobileRouting();
        return this.instance;
    }

    private constructor() {
        super(QxMobileApplication.getInstance().getRouting());
    }

    init() {
        this.widget.init();
    }

    onGet(route: string, page: AbstractPage) {
        console.log('onGet', page.widget.getTitle());
        // this.widget.onGet(route, () => {
        //     console.log('GET', page);
        //      page.show()
        //      });
    }

    showPage(page: AbstractPage) {
        page.show();
    }

}

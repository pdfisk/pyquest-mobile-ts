import { AbstractPage } from "../../../../ui/pages/abstract/AbstractPage";
import { QxObject } from '../../../core/QxObject';
import { QxFactory } from '../../../factory/QxFactory';
import { QxNavigationPage } from "./QxNavigationPage";

export class QxPageManager extends QxObject {
    static instance: QxPageManager;

    static getInstance(): QxPageManager {
        if (!this.instance)
            this.instance = new QxPageManager();
        return this.instance;
    }

    private constructor() {
        super(QxFactory.mobilePageManager());
    }

    addDetailPages(pages: AbstractPage[]) {
        const widgets: any[] = [];
        for (let i = 0; i < pages.length; i++)
            widgets.push(pages[i].widget);
        this.widget.addDetail(widgets);
    }

    addMaster(page: QxNavigationPage) {
        this.widget.addMaster(page.widget);
    }

}

import { QxNavigationPage } from '../../qx/mobile/page/QxNavigationPage';
import { QxPage } from '../../qx/mobile/page/QxPage';
import { QxPageManager } from '../../qx/mobile/page/QxPageManager';

export class Viewport extends QxPageManager {
    navigationPage: QxNavigationPage;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    constructor() {
        super();
        this.navigationPage = new QxNavigationPage();
    }

    initialize() {
        super.initialize();
        const page = new QxPage();
        (window as any).X = this;
        console.log('OK');
    }

}

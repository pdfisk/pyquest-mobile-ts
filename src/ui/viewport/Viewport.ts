import { QxMobileRouting } from '../../qx/application/QxMobileRouting';
import { QxMobileComposite } from '../../qx/mobile/container/QxMobileComposite';
import { QxMobileRoot } from '../../qx/mobile/core/QxMobileRoot';
import { QxPageManager } from '../../qx/mobile/page/QxPageManager';

export class Viewport extends QxMobileComposite {
    manager: QxPageManager;
    root: QxMobileRoot;
    routing: QxMobileRouting;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    constructor() {
        super();
        this.manager = QxPageManager.getInstance();
        this.root = QxMobileRoot.getInstance();
        this.routing = QxMobileRouting.getInstance();
    }

    initialize() {
        super.initialize();
        (window as any).X = this;
        console.log('OK');
    }

}

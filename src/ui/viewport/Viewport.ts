import { QxMobileRoot } from '../../qx/mobile/core/QxMobileRoot';
import { QxMobileComposite } from '../../qx/mobile/container/QxMobileComposite';
import { SessionStatus } from '../../session/SessionStatus';

export class Viewport extends QxMobileComposite {
    static instance: Viewport;

    static getInstance(root: QxMobileRoot) {
        if (this.instance === undefined)
            this.instance = new Viewport(root);
        return this.instance;
    }

    constructor(root: QxMobileRoot) {
        super();
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
        this.setStyle('backgroundColor', 'blue');
        // this.setBackgroundColor(ColorConstants.ViewportBackground);
    }

}

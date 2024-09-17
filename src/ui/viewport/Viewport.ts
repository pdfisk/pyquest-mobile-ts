import { ColorConstants, SizeConstants } from '../../constants';
import { QxMobileComposite } from '../../qx/mobile/container/QxMobileComposite';
import { SessionStatus } from '../../session/SessionStatus';

export class Viewport extends QxMobileComposite {
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
        this.setHeight(SizeConstants.Size100Pct);
        this.setBackgroundColor(ColorConstants.ViewportBackground);
    }

}

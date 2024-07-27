import { ColorConstants } from '../../constants/ColorConstants';
import { QxComposite } from '../../qx/ui/container/QxComposite';
import { SessionStatus } from '../../session/SessionStatus';
import { NavBar } from './navbar/NavBar';

export class Viewport extends QxComposite {
    navBar: any = undefined;
    static instance: Viewport;

    static getInstance(root: any = null) {
        if (this.instance === undefined)
            this.instance = new Viewport(root);
        return this.instance;
    }

    constructor(root: any) {
        super();
        root.add(this.widget, { top: 0, right: 0, bottom: 0, left: 0 });
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
        this.setBackgroundColor(ColorConstants.ViewportBackground);
        this.navBar = new NavBar();
        this.addNorth(this.navBar);
    }

}

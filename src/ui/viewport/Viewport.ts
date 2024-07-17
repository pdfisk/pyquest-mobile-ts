import { ColorConstants } from '../../constants/ColorConstants';
import { QxComposite } from '../../qx/ui/container/QxComposite';

export class Viewport extends QxComposite {

    static instance: Viewport;

    static getInstance(root: any = null) {
        if (this.instance === undefined)
            this.instance = new Viewport(root);
        return this.instance;
    }

    constructor(root: any) {
        super();
        root.add(this.widget, { top: 0, right: 0, bottom: 0, left: 0 });
        (window as any).X = this;
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.ViewportBackground);
    }

}

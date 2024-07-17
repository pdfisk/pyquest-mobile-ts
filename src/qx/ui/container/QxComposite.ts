import { QxWidget } from '../core/QxWidget';

export class QxComposite extends QxWidget {

    constructor() {
        const widget: any = new (window as any).qx.ui.container.Composite;
        super(widget);
    }

}

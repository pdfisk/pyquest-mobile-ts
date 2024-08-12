import { QxWidget } from '../../qx/ui/core/QxWidget';
import { BasicPanel } from './BasicPanel';

export class CenteredPanel extends BasicPanel {
    child: QxWidget;

    constructor(child: QxWidget) {
        super();
        this.child = child;
        this.add(this.child);
    }

}

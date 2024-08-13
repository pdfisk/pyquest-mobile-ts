import { QxWidget } from '../../qx/ui/core/QxWidget';
import { BasicPanel } from './BasicPanel';

export class CenteredPanel extends BasicPanel {
    child: QxWidget;
    childHeight: number = 0;
    childWidth: number = 0;

    constructor(child: QxWidget) {
        super();
        this.child = child;
        this.add(this.child);
    }

    setSize(width: number, height: number) {
        console.log('setSize');
        this.childWidth = width;
        this.childHeight = height;
        this.setChildSize();
    }

    setChildSize() {
        this.child.setWidth(this.childWidth);
        this.child.setHeight(this.childHeight);
    }

}

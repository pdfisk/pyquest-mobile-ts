import { QxWidget } from '../../qx/ui/core/QxWidget';
import { BasicPanel } from './BasicPanel';

export class CenteredPanel extends BasicPanel {
    child: QxWidget;
    childHeight: number = -1;
    childWidth: number = -1;

    constructor(child: QxWidget) {
        super();
        this.child = child;
        this.add(this.child);
    }

    centerChild() {
        const tileBounds = this.getBounds();
        if (!tileBounds) return;
        const tileWidth = tileBounds.width;
        const tileHeight = tileBounds.height;
        const labelLeft = (tileWidth - this.childWidth) / 2;
        const labelTop = (tileHeight - this.childHeight) / 2;
        this.child.setLeft(labelLeft);
        this.child.setTop(labelTop);
    }

    onAppear() {
        super.onAppear();
        this.centerChild();
    }

    onResize() {
        this.centerChild();
    }

    setSize(width: number, height: number) {
        this.childWidth = width;
        this.childHeight = height;
        this.setChildSize();
    }

    setChildSize() {
        if (this.childWidth < 0 || this.childHeight < 0)
            return;
        this.child.setWidth(this.childWidth);
        this.child.setHeight(this.childHeight);
    }

}

import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";
import { QxAbstractBox } from "../layout/QxAbstractBox";

export class QxComposite extends QxWidget {
    children: QxWidget[] = [];

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    add(child: QxWidget, options: any = { flex: 0 }) {
        this.children.push(child);
        this.widget.add(child.widget, options);
    }

    addFlex(child: QxWidget, flex: number = 1) {
        this.add(child, { flex: flex });
    }

    getChild(index: number): QxWidget | null {
        const childWidget = this.getChildWidget(index);
        if (!childWidget)
            return null;
        const userData = this.widget.getUserData();
        if (userData instanceof QxWidget)
            return userData as QxWidget;
        return null;
    }

    getChildWidget(index: number): any {
        if (index < this.getChildCount())
            return this.widget.getChild(index);
        return null;
    }

    getChildCount(): number {
        return this.widget.getChildCount();
    }

    removeAll() {
        this.children = [];
        this.widget.removeAll();
    }

    setLayout(layout: QxAbstractBox) {
        this.widget.setLayout(layout.widget);
    }

}

import { QxFactory } from "../../../factory";
import { QxWidget } from "../core/QxWidget";
import { QxAbstractBox } from "../layout/QxAbstractBox";

export class QxComposite extends QxWidget {
    children: QxWidget[] = [];

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    add(child: QxWidget, options: any = {}): QxWidget {
        this.children.push(child);
        this.widget.add(child.widget, options);
        return child;
    }

    addFlex(child: QxWidget, flex: number = 1): QxWidget {
        return this.add(child, { flex: flex });
    }

    addFlexReset(child: QxWidget, flex: number = 1): QxWidget {
        this.addFlex(child, flex);
        child.resetHeight();
        return child;
    }


    addReset(child: QxWidget, options: any = {}): QxWidget {
        this.add(child, options);
        child.resetHeight();
        return child;
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

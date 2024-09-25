import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";
import { QxAbstractBox } from "../layout/QxAbstractBox";

export class QxComposite extends QxWidget {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileComposite());
    }

    add(child: QxWidget, options: any = {}) {
        this.widget.add(child.widget, options);
    }

    addFlex(child: QxWidget, flex: number = 1) {
        this.add(child, { flex: flex });
    }

    setLayout(layout: QxAbstractBox) {
        this.widget.setLayout(layout.widget);
    }

}

import { QxWidget } from '../../qx/ui/core/QxWidget';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxBasicLayout } from '../../qx/ui/layout/QxBasicLayout';
import { AbstractPanel } from "./AbstractPanel";

export class BasicPanel extends AbstractPanel {

    addTopLeft(child: QxWidget, left: number, top: number) {
        this.add(child, { left: left, top: top });
    }

    defaultLayout(): QxAbstractLayout {
        return new QxBasicLayout();
    }

}

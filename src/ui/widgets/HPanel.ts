import { LayoutConstants } from '../../constants/LayoutConstants';
import { QxWidget } from '../../qx/ui/core/QxWidget';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { AbstractPanel } from "./AbstractPanel";

export class HPanel extends AbstractPanel {

    addAlignCenter(child: QxWidget) {
        child.setAlignY(LayoutConstants.AlignCenter);
    }

    defaultLayout(): QxAbstractLayout {
        return new QxHBoxLayout();
    }

}

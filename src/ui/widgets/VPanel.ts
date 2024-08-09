import { LayoutConstants } from '../../constants/LayoutConstants';
import { QxWidget } from '../../qx/ui/core/QxWidget';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxVBoxLayout } from '../../qx/ui/layout/QxVBoxLayout';
import { AbstractPanel } from "./AbstractPanel";

export class VPanel extends AbstractPanel {

    addAlignMiddle(child: QxWidget) {
        child.setAlignY(LayoutConstants.AlignMiddle);
    }

    defaultLayout(): QxAbstractLayout {
        return new QxVBoxLayout();
    }

}

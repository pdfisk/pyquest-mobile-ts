import { LayoutConstants } from '../../constants/LayoutConstants';
import { QxWidget } from '../../qx/ui/core/QxWidget';
import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxVBoxLayout } from '../../qx/ui/layout/QxVBoxLayout';
import { VPanel } from "./VPanel";
import { HPanel } from "./HPanel";

export class CenteredPanel extends VPanel {
    middlePanel: HPanel;

    constructor() {
        super();
        this.middlePanel = new HPanel;
        this.addAlignMiddle(this.middlePanel);
    }

    setChild(child: QxWidget) {
        this.middlePanel.removeAll();
        this.middlePanel.addAlignCenter(child);
    }

    addAlignMiddle(child: QxWidget) {
        child.setAlignY(LayoutConstants.AlignMiddle);
    }

    defaultLayout(): QxAbstractLayout {
        return new QxVBoxLayout();
    }

}

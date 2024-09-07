import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxGrowLayout } from '../../qx/ui/layout/QxGrowLayout';
import { AbstractPanel } from "./AbstractPanel";

export class GrowPanel extends AbstractPanel {
 
    defaultLayout(): QxAbstractLayout {
        return new QxGrowLayout();
    }

}

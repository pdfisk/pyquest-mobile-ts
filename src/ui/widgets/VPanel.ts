import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxVBoxLayout } from '../../qx/ui/layout/QxVBoxLayout';
import { AbstractPanel } from "./AbstractPanel";

export class VPanel extends AbstractPanel {

    defaultLayout(): QxAbstractLayout {
        return new QxVBoxLayout();
    }

}

import { QxAbstractLayout } from '../../qx/ui/layout/QxAbstractLayout';
import { QxHBoxLayout } from '../../qx/ui/layout/QxHBoxLayout';
import { AbstractPanel } from "./AbstractPanel";

export class HPanel extends AbstractPanel {

    defaultLayout(): QxAbstractLayout {
        return new QxHBoxLayout();
    }

}

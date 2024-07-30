import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxAbstractLayout } from '../layout/QxAbstractLayout';
import { QxDockLayout } from '../layout/QxDockLayout';

export class QxTabPage extends QxWidget {

    constructor(label: string) {
        super(QxFactory.tabPage());
        this.setLayout(new QxDockLayout);
        this.setLabel(label);
    }

    addCenter(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'center' });
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

    setLayout(layout: QxAbstractLayout) {
        this.widget.setLayout(layout.widget);
    }

}

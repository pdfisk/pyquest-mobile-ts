import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxAbstractLayout } from '../layout/QxAbstractLayout';
import { QxDockLayout } from '../layout/QxDockLayout';

export class QxComposite extends QxWidget {

    constructor() {
        super(QxFactory.compositeContainer());
    }

    initialize() {
        super.initialize();
        this.setLayout(this.defaultLayout());
    }

    addCenter(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'center' });
    }

    addEast(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'east' });
    }

    addNorth(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'north' });
    }

    addSouth(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'south' });
    }

    addWest(child: QxWidget) {
        this.widget.add(child.widget, { edge: 'west' });
    }

    defaultLayout(): QxAbstractLayout {
        return new QxDockLayout();
    }

    setLayout(layout: QxAbstractLayout) {
        console.log('setLayout', layout);
        (window as any).X = [this, layout];
        this.widget.setLayout(layout.widget);
    }

}

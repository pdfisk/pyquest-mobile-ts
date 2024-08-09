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
        this.setPadding(this.defaultPadding());
    }

    add(child: QxWidget, options: any = {}) {
        this.widget.add(child.widget, options);
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

    addRowColumn(child: QxWidget, row: number, column: number) {
        this.widget.add(child.widget, { row: row, column: column });
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

    defaultPadding(): number[] {
        return [0];
    }

    setLayout(layout: QxAbstractLayout) {
        this.widget.setLayout(layout.widget);
    }

}

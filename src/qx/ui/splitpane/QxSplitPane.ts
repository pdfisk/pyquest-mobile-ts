import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';

export class QxSplitPane extends QxWidget {

    static create(orientation: string) {
        const splitPane: QxSplitPane = new QxSplitPane();
        splitPane.setOrientation(orientation);
        return splitPane;
    }

    static createHorizontal() {
        return this.create('horizontal');
    }

    static createVertical() {
        return this.create('vertical');
    }

    private constructor() {
        super(QxFactory.splitPane());
    }

    add(child: QxWidget, flex: number) {
        this.widget.add(child.widget, flex);
    }

    setOrientation(orientation: string) {
        this.widget.setOrientation(orientation);
    }

}

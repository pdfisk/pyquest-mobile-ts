import { QxFactory } from '../../factory/QxFactory';
import { QxWidget } from '../core/QxWidget';
import { QxTabPage } from './QxTabPage';

export class QxTabView extends QxWidget {

    constructor() {
        super(QxFactory.tabView());
    }

    add(page: QxTabPage) {
        this.widget.add(page.widget);
    }

}

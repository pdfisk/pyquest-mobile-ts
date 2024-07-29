import { QxFactory } from '../../factory/QxFactory';
import { QxComposite } from '../container/QxComposite';

export class QxTabPage extends QxComposite {

    constructor(label: string) {
        super();
        this.widget = QxFactory.tabPage();
        this.setLabel(label);
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}

import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class ConsoleWindow extends AbstractWindow {

    cin?: QxTextArea;
    cout?: QxTextArea;
    splitPane?: QxSplitPane;

    initialize() {
        super.initialize();
        this.cin = new QxTextArea();
        this.cout = new QxTextArea();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.cin);
        this.splitPane.add(this.cout);
        this.add(this.splitPane);
    }

    defaultCaption(): string {
        return 'Console';
    }

}

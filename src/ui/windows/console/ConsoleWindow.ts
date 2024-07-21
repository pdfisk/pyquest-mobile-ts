import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';

export class ConsoleWindow extends QxWindowWindow {

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

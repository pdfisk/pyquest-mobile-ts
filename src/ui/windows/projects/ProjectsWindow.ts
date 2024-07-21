import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class ProjectsWindow extends AbstractWindow {

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
  
    addButtons() {
        this.addButton('Refresh');
    }
  
    defaultCaption(): string {
        return 'Projects';
    }

}

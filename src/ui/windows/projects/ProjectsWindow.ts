import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsList } from './widgets/ProjectsList';

export class ProjectsWindow extends AbstractWindow {

    cout?: QxTextArea;
    projectsList?: ProjectsList;
    splitPane?: QxSplitPane;

    initialize() {
        super.initialize();
        this.projectsList = new ProjectsList();
        this.cout = new QxTextArea();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsList);
        this.splitPane.add(this.cout);
        this.add(this.splitPane);
    }

    addButtons() {
        this.addButton('Refresh');
    }

    buildProjectsList() {
        this.projectsList = new ProjectsList();
        const fn = (data: any[]) => {
            for (let i = 0; i < data.length; i++) {
                console.log(i, data[i]);
            }
        }
    }

    defaultCaption(): string {
        return 'Projects';
    }

}

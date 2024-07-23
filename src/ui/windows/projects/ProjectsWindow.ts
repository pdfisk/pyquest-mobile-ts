import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { TextPanel } from '../../widgets/TextPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsList } from './widgets/ProjectsList';

export class ProjectsWindow extends AbstractWindow {

    projectsList?: ProjectsList;
    splitPane?: QxSplitPane;
    textPanel?: TextPanel;

    initialize() {
        super.initialize();
        this.projectsList = this.buildProjectsList();
        this.textPanel = new TextPanel();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsList);
        this.splitPane.add(this.textPanel);
        this.add(this.splitPane);
    }

    addButtons() {
        this.addButton('Refresh');
    }

    buildProjectsList(): ProjectsList {
        const projectsList = new ProjectsList();
        const fn = (value: any) => {
            this.onSelectionChange(value);
        };
        projectsList.setChangeHandler(fn);
        return projectsList;
    }

    defaultCaption(): string {
        return 'Projects';
    }

    onSelectionChange(value: any) {
        const code = value.code;
        (this.textPanel as TextPanel).setValue(value.code);
    }

}

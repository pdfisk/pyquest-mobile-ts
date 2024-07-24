import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { EditorPanel } from '../../widgets/EditorPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsList } from './widgets/ProjectsList';

export class ProjectsWindow extends AbstractWindow {

    projectsList?: ProjectsList;
    splitPane?: QxSplitPane;
    editorPanel?: EditorPanel;

    initialize() {
        super.initialize();
        this.projectsList = this.buildProjectsList();
        this.editorPanel = new EditorPanel();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsList, 1);
        this.splitPane.add(this.editorPanel, 2);
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

    onButtonClick(tag: string) {
        switch (tag) {
            case 'refresh':
                this.onRefresh();
                break;
            default:
                console.log('ProjectsWindow onButtonClick', tag);
                break;
        }
    }

    onRefresh() {
        this.editorPanel?.clear();
        this.projectsList?.refresh();
    }

    onSelectionChange(value: any) {
        const code = value.code;
        (this.editorPanel as EditorPanel).setValue(value.code);
    }

}

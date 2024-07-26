import { LabelConstants } from '../../../constants/LabelConstants';
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
        this.addButton('Save');
        this.addButton('New');
        this.addButton('Delete');
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
        return LabelConstants.WindowLabelProjects;
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case 'delete':
                this.onDelete();
                break;
            case 'new':
                this.onNew();
                break;
            case 'refresh':
                this.onRefresh();
                break;
            case 'save':
                this.onSave();
                break;
            default:
                console.log('ProjectsWindow onButtonClick', tag);
                break;
        }
    }

    onDelete() {
        console.log('onDelete');
    }

    onNew() {
        console.log('onNew');
    }

    onRefresh() {
        this.editorPanel?.clear();
        this.projectsList?.refresh();
    }

    onSave() {
        console.log('onSave');
    }

    onSelectionChange(value: any) {
        const code = value.code;
        (this.editorPanel as EditorPanel).setValue(value.code);
    }

}

import { ActionConstants } from '../../../constants/ActionConstants';
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
        this.addButton(LabelConstants.ButtonLabelRefresh);
        this.addButton(LabelConstants.ButtonLabelSave);
        this.addButton(LabelConstants.ButtonLabelNew);
        this.addButton(LabelConstants.ButtonLabelDelete);
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
            case ActionConstants.ActionDelete:
                this.onDelete();
                break;
            case ActionConstants.ActionNew:
                this.onNew();
                break;
            case ActionConstants.ActionRefresh:
                this.onRefresh();
                break;
            case ActionConstants.ActionSave:
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

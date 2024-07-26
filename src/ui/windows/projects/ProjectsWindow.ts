import { ActionConstants } from '../../../constants/ActionConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { EditorPanel } from '../../widgets/EditorPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsList } from './widgets/ProjectsList';

export class ProjectsWindow extends AbstractWindow {

    editorPanel?: EditorPanel;
    projectsList?: ProjectsList;
    splitPane?: QxSplitPane;
    deleteButton?: QxFormButton;
    newButton?: QxFormButton;
    saveButton?: QxFormButton;

    initialize() {
        super.initialize();
        this.projectsList = this.buildProjectsList();
        this.editorPanel = new EditorPanel();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsList, 1);
        this.splitPane.add(this.editorPanel, 2);
        this.add(this.splitPane);
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
    }

    addButtons() {
        this.addButton(LabelConstants.ButtonLabelRefresh);
        this.saveButton = this.addButton(LabelConstants.ButtonLabelSave);
        this.newButton = this.addButton(LabelConstants.ButtonLabelNew);
        this.deleteButton = this.addButton(LabelConstants.ButtonLabelDelete);
        this.disableButtons();
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

    disableButtons() {
        if (this.deleteButton)
            this.deleteButton.setEnabled(false);
        if (this.newButton)
            this.newButton.setEnabled(false);
        if (this.saveButton)
            this.saveButton.setEnabled(false);
    }

    enableButtons() {
        if (this.deleteButton)
            this.deleteButton.setEnabled(true);
        if (this.newButton)
            this.newButton.setEnabled(true);
        if (this.saveButton)
            this.saveButton.setEnabled(true);
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

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        if (status == SessionConstants.SessionLoggedIn || status == SessionConstants.SessionLoggedInAsAdmin)
            this.enableButtons();
        else
            this.disableButtons();
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

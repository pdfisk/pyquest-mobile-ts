import { ActionConstants } from '../../../constants/ActionConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { SessionStatus } from '../../../session/SessionStatus';
import { EditorPanel } from '../../widgets/EditorPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsPanel } from './widgets/ProjectsPanel';

export class ProjectsWindow extends AbstractWindow {

    editorPanel?: EditorPanel;
    projectsPanel?: ProjectsPanel;
    splitPane?: QxSplitPane;
    deleteButton?: QxFormButton;
    newButton?: QxFormButton;
    saveButton?: QxFormButton;

    initialize() {
        super.initialize();
        this.projectsPanel = this.buildProjectsList();
        this.editorPanel = new EditorPanel();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsPanel, 1);
        this.splitPane.add(this.editorPanel, 2);
        this.add(this.splitPane);
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
    }

    addButtons() {
        this.addButton(LabelConstants.ButtonLabelRefresh);
        this.saveButton = this.addButton(LabelConstants.ButtonLabelSave);
        this.newButton = this.addButton(LabelConstants.ButtonLabelNew);
        this.deleteButton = this.addButton(LabelConstants.ButtonLabelDelete);
        if (SessionStatus.isLoggedIn())
            this.enableButtons();
        else
            this.disableButtons();
    }

    buildProjectsList(): ProjectsPanel {
        const projectsList = new ProjectsPanel();
        const fn = (value: any) => {
            this.onSelectionChange(value);
        };
        projectsList.setChangeHandler(fn);
        return projectsList;
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelProjects;
    }

    defaultHeight(): number {
        return SizeConstants.MediumWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.MediumWindowWidth;
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
        this.projectsPanel?.deleteProject();
    }

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        if (status == SessionConstants.SessionLoggedInAsUser || status == SessionConstants.SessionLoggedInAsAdmin)
            this.enableButtons();
        else
            this.disableButtons();
    }

    onNew() {
        this.projectsPanel?.newProject();
    }

    onRefresh() {
        this.editorPanel?.clear();
        this.projectsPanel?.refresh();
    }

    onSave() {
        this.projectsPanel?.saveProject();
    }

    onSelectionChange(value: any) {
        const code = value.code;
        (this.editorPanel as EditorPanel).setValue(value.code);
    }

}

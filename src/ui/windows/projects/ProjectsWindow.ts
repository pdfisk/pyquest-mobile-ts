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
    renameButton?: QxFormButton;
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
        this.renameButton = this.addButton(LabelConstants.ButtonLabelRename);
        this.newButton = this.addButton(LabelConstants.ButtonLabelNew);
        this.deleteButton = this.addButton(LabelConstants.ButtonLabelDelete);
        this.updateEnabledButtons();
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

    updateEnabledButtons() {
        const fn = () => {
            const enabled_1:boolean = this.isLoggedIn();
            const enabled_2:boolean = enabled_1 && this.hasSelectedData();
            if (this.deleteButton)
                this.deleteButton.setEnabled(enabled_2);
            if (this.newButton)
                this.newButton.setEnabled(enabled_1);
            if (this.renameButton)
                this.renameButton.setEnabled(enabled_2);
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_2);
        };
        setTimeout(fn, 100);
    }

    getCode(): string {
        if (this.editorPanel)
            return this.editorPanel.getValue();
        return '';
    }

    hasSelectedData(): boolean {
        return this.projectsPanel ? this.projectsPanel.hasSelectedData() : false;
    }

    isLoggedIn(): boolean {
        return SessionStatus.isLoggedIn();
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
            case ActionConstants.ActionRename:
                this.onRename();
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
        this.updateEnabledButtons();
    }

    onNew() {
        this.projectsPanel?.newProject();
    }

    onRefresh() {
        this.editorPanel?.clear();
        this.projectsPanel?.refresh();
        this.updateEnabledButtons();
    }

    onRename() {
        console.log('onRename');
    }

    onSave() {
        const code: string = this.getCode();
        this.projectsPanel?.updateCode(this.getCode());
        this.projectsPanel?.saveProject();
    }

    onSelectionChange(value: any) {
        (this.editorPanel as EditorPanel).setValue(value.code);
        this.updateEnabledButtons();
    }

}

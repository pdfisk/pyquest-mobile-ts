import { ActionConstants } from '../../../constants/ActionConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxPopup } from '../../../qx/ui/popup/Popup';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { SessionStatus } from '../../../session/SessionStatus';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsPanel } from './widgets/ProjectsPanel';
import { ProjectTabView } from './widgets/ProjectTabView';

export class ProjectsWindow extends AbstractWindow {

    projectsPanel?: ProjectsPanel;
    splitPane?: QxSplitPane;
    deleteButton?: QxFormButton;
    newButton?: QxFormButton;
    renameButton?: QxFormButton;
    saveButton?: QxFormButton;
    tabView?: ProjectTabView;

    initialize() {
        super.initialize();
        this.projectsPanel = this.buildProjectsList();
        this.tabView = new ProjectTabView;
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.projectsPanel, 1);
        this.splitPane.add(this.tabView, 2);
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

    getCode(): string {
        if (this.tabView)
            return this.tabView.getCode();
        return '';
    }

    getDescription(): string {
        if (this.tabView)
            return this.tabView.getDescription();
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
        this.refresh();
    }

    onEventStatusChanged(message: any) {
        this.updateEnabledButtons();
    }

    onNew() {
        this.projectsPanel?.newProject();
        this.refresh();
    }

    onRefresh() {
        this.refresh();
    }

    onRename() {
        const selectedData = this.projectsPanel?.getSelectedData();
        if (!selectedData) return;
        const oldName = selectedData.name;
        const newNameFn = (newName: string) => {
            selectedData.name = newName;
            this.save();
        };
        QxPopup.rename(oldName, newNameFn);
    }

    onSave() {
        this.projectsPanel?.updateCode(this.getCode());
        this.projectsPanel?.updateDescription(this.getDescription());
        this.save();
    }

    onSelectionChange(value: any) {
        const tabView: ProjectTabView = this.tabView as ProjectTabView;
        tabView.setCode(value.code);
        tabView.setDescription(value.description);
        this.updateEnabledButtons();
    }

    refresh() {
        (this.tabView as ProjectTabView).clearCode();
        this.projectsPanel?.refresh();
        this.updateEnabledButtons();
    }

    save() {
        this.projectsPanel?.saveProject();
        this.refresh();
    }

    updateEnabledButtons() {
        const fn = () => {
            const enabled_1: boolean = this.isLoggedIn();
            const enabled_2: boolean = enabled_1 && this.hasSelectedData();
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

}

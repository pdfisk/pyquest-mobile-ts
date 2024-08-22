import { VmApi } from '../../../api/VmApi';
import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxSplitButton } from '../../../qx/ui/form/QxSplitButton';
import { QxPopup } from '../../../qx/ui/popup/Popup';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { SessionStatus } from '../../../session/SessionStatus';
import { ButtonBar } from '../../widgets/ButtonBar';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { ProjectsButtonBar } from './widgets/ProjectsButtonBar';
import { ProjectsPanel } from './widgets/ProjectsPanel';
import { ProjectTabView } from './widgets/ProjectTabView';

export class ProjectsWindow extends AbstractWindow {
    deleteButton?: QxFormButton;
    moreButton?: QxSplitButton;
    newButton?: QxFormButton;
    projectsPanel?: ProjectsPanel;
    renameButton?: QxFormButton;
    runButton?: QxFormButton;
    runContinouslyButton?: QxFormButton;
    runSingleStepButton?: QxFormButton;
    runSteppingButton?: QxFormButton;
    saveButton?: QxFormButton;
    splitPane?: QxSplitPane;
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

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelRefresh);
        const saveMenuButtons: string[] = [
            LabelConstants.ButtonLabelRename,
            LabelConstants.ButtonLabelNew,
            LabelConstants.ButtonLabelDelete
        ];
        const saveSplitBtns = this.addSplitButtonLeft(LabelConstants.ButtonLabelSave, saveMenuButtons);
        this.saveButton = saveSplitBtns[0];
        const moreMenuButtonMap: any = saveSplitBtns[1];
        this.renameButton = moreMenuButtonMap[LabelConstants.ButtonLabelRename];
        this.newButton = moreMenuButtonMap[LabelConstants.ButtonLabelNew];
        this.deleteButton = moreMenuButtonMap[LabelConstants.ButtonLabelDelete];
        this.addHandlers();
        this.updateEnabledButtons();
    }

    addButtonsRight() {
        const runMenuButtons: string[] = [
            LabelConstants.ButtonLabelRunContinuously,
            LabelConstants.ButtonLabelRunSingleStep,
            LabelConstants.ButtonLabelRunStepping
        ];
        const runSplitBtns = this.addSplitButtonRight(LabelConstants.ButtonLabelRun, runMenuButtons);
        this.runButton = runSplitBtns[0];
        const runMenuButtonMap: any = runSplitBtns[1];
        this.runContinouslyButton = runMenuButtonMap[LabelConstants.ButtonLabelRunContinuously];
        this.runSingleStepButton = runMenuButtonMap[LabelConstants.ButtonLabelRunSingleStep];
        this.runSteppingButton = runMenuButtonMap[LabelConstants.ButtonLabelRunStepping];
    }

    addHandlers() {
        const projectsButtonBar = this.buttonBar as ProjectsButtonBar;
        projectsButtonBar.setSelectionHandlerFn(() => {
            this.projectsPanel?.showSelectedCategory(projectsButtonBar.getSelectedCategory());
            this.tabView?.clear();
        });
    }

    buildProjectsList(): ProjectsPanel {
        const projectsList = new ProjectsPanel(this);
        const fn = (value: any) => {
            this.onSelectionChange(value);
        };
        projectsList.setChangeHandler(fn);
        return projectsList;
    }

    defaultButtonBar(): ButtonBar {
        return new ProjectsButtonBar(this);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelProjects;
    }

    defaultHeight(): number {
        return SizeConstants.ProjectsWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.ProjectsWindowWidth;
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

    getDetails(): string {
        if (this.tabView)
            return this.tabView.getDetails();
        return '';
    }

    getSelectedCategory(): string {
        return (this.buttonBar as ProjectsButtonBar).getSelectedCategory();
    }

    getTabViewId(): number {
        return this.tabView ? this.tabView?.getId() : -1;
    }

    hasSelectedData(): boolean {
        return this.projectsPanel ? this.projectsPanel.hasSelectedData() : false;
    }

    initStdOut() {
        super.initStdOut();
        if (this.tabView?.getTranscriptPanel())
            this.setStdOut(this.tabView?.getTranscriptPanel());
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
            case ActionConstants.ActionRun:
                this.onRun();
                break;
            case ActionConstants.ActionRunContinuously:
                this.onRunContinuously();
                break;
            case ActionConstants.ActionRunSingleStep:
                this.onRunSingleStep();
                break;
            case ActionConstants.ActionRunStepping:
                this.onRunStepping();
                break;
            case ActionConstants.ActionSave:
                this.onSave();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.ProjectsWindowOnButtonClick, tag);
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

    onMaximize() {
        this.onResize();
    }

    onMinimize() {
        this.onResize();
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

    onResize() {
        this.tabView?.boardPanel.centerLabels();
    }

    onRestore() {
        this.onResize();
    }

    onRun() {
        const src: string = this.getCode();
        const stdOutId: number = this.getStdOutId();
        const processId: number = VmApi.run(src, this.getId(), stdOutId);
    }

    onRunContinuously() {
        console.log('onRunContinuously');
    }

    onRunSingleStep() {
        console.log('onRunSingleStep');
    }

    onRunStepping() {
        console.log('onRunStepping');
    }

    onSave() {
        this.projectsPanel?.updateCode(this.getCode());
        this.projectsPanel?.updateDescription(this.getDescription());
        this.projectsPanel?.updateDetails(this.getDetails());
        this.save();
    }

    onSelectionChange(value: any) {
        const tabView: ProjectTabView = this.tabView as ProjectTabView;
        tabView.setCode(value.code);
        tabView.setDescription(value.description);
        tabView.setDetails(value.details);
        this.updateEnabledButtons();
    }

    refresh() {
        (this.tabView as ProjectTabView).clear();
        this.projectsPanel?.refresh();
        this.updateEnabledButtons();
    }

    registerObjects() {
        super.registerObjects();
    }

    save() {
        this.projectsPanel?.saveProject();
        this.refresh();
    }

    setActiveTab(tab: string) {
        this.tabView?.setActiveTab(tab);
    }

    unregisterObjects() {
        super.unregisterObjects();
        this.projectsPanel?.releaseHandlers();
    }

    updateCategories(categories: string[]) {
        (this.buttonBar as ProjectsButtonBar).updateCategories(categories);
    }

    updateEnabledButtons() {
        const fn = () => {
            const enabled_1: boolean = this.isLoggedIn();
            const enabled_2: boolean = this.hasSelectedData();
            const enabled_3: boolean = enabled_1 && enabled_2;
            if (this.deleteButton)
                this.deleteButton.setEnabled(enabled_3);
            if (this.moreButton)
                this.moreButton.setEnabled(enabled_1);
            if (this.newButton)
                this.newButton.setEnabled(enabled_1);
            if (this.renameButton)
                this.renameButton.setEnabled(enabled_3);
            if (this.runButton)
                this.runButton.setEnabled(enabled_2);
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_3);
        };
        setTimeout(fn, 100);
    }

}

import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxSplitButton } from '../../../qx/ui/form/QxSplitButton';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { SessionStatus } from '../../../session/SessionStatus';
import { ButtonBar } from '../../widgets/ButtonBar';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { VisitorsButtonBar } from './widgets/VisitorsButtonBar';
import { VisitorsDetailsPanel } from './widgets/VisitorsDetailsPanel';
import { VisitorsPanel } from './widgets/VisitorsPanel';

export class VisitorsWindow extends AbstractWindow {
    deleteButton?: QxFormButton;
    detailsPanel?: VisitorsDetailsPanel;
    moreButton?: QxSplitButton;
    newButton?: QxFormButton;
    renameButton?: QxFormButton;
    saveButton?: QxFormButton;
    splitPane?: QxSplitPane;
    visitorsPanel?: VisitorsPanel;

    initialize() {
        super.initialize();
        this.visitorsPanel = this.buildVisitorsList();
        this.detailsPanel = new VisitorsDetailsPanel(this);
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.visitorsPanel, 1);
        this.splitPane.add(this.detailsPanel, 2);
        this.add(this.splitPane);
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
        this.updateEnabledButtons();
    }

    buildVisitorsList(): VisitorsPanel {
        const visitorsList = new VisitorsPanel(this);
        const fn = (value: any) => {
            this.onSelectionChange(value);
        };
        visitorsList.setChangeHandler(fn);
        return visitorsList;
    }

    defaultButtonBar(): ButtonBar {
        return new VisitorsButtonBar(this);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelVisitors;
    }

    defaultHeight(): number {
        return SizeConstants.VisitorsWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.VisitorsWindowWidth;
    }

    hasSelectedData(): boolean {
        return this.visitorsPanel ? this.visitorsPanel.hasSelectedData() : false;
    }

    isLoggedIn(): boolean {
        return SessionStatus.isLoggedIn();
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case ActionConstants.ActionRefresh:
                this.onRefresh();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.VisitorsWindowOnButtonClick, tag);
                break;
        }
    }

    onEventStatusChanged(_message: any) {
        this.updateEnabledButtons();
    }

    onMaximize() {
        this.onResize();
    }

    onMinimize() {
        this.onResize();
    }

    onRefresh() {
        this.refresh();
    }

    onRestore() {
        this.onResize();
    }

    onSelectionChange(value: any) {
        if (!value) return;
        this.detailsPanel?.setValue(value);
        this.updateEnabledButtons();
    }

    refresh() {
        this.visitorsPanel?.refresh();
        this.detailsPanel?.clear();
        this.updateEnabledButtons();
    }

    registerObjects() {
        super.registerObjects();
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
    }

    unregisterObjects() {
        super.unregisterObjects();
        EventBus.unsubscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        this.visitorsPanel?.releaseHandlers();
    }

    updateEnabledButtons() {
    }

}

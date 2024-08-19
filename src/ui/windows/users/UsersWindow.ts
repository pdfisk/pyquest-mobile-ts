import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { ErrorManager } from '../../../errors/ErrorManager';
import { EventBus } from '../../../messages/EventBus';
import { QxFormButton } from '../../../qx/ui/form/QxFormButton';
import { QxSplitButton } from '../../../qx/ui/form/QxSplitButton';
import { QxPopup } from '../../../qx/ui/popup/Popup';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { SessionStatus } from '../../../session/SessionStatus';
import { ButtonBar } from '../../widgets/ButtonBar';
import { AbstractWindow } from '../abstract/AbstractWindow';
import { DetailsPanel } from './widgets/DetailsPanel';
import { UsersButtonBar } from './widgets/UsersButtonBar';
import { UsersPanel } from './widgets/UsersPanel';

export class UsersWindow extends AbstractWindow {
    deleteButton?: QxFormButton;
    detailsPanel?: DetailsPanel;
    moreButton?: QxSplitButton;
    newButton?: QxFormButton;
    renameButton?: QxFormButton;
    saveButton?: QxFormButton;
    splitPane?: QxSplitPane;
    usersPanel?: UsersPanel;

    initialize() {
        super.initialize();
        this.usersPanel = this.buildUsersList();
        this.detailsPanel = new DetailsPanel(this);
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.usersPanel, 1);
        this.splitPane.add(this.detailsPanel, 2);
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
        this.updateEnabledButtons();
    }

    buildUsersList(): UsersPanel {
        const usersList = new UsersPanel(this);
        const fn = (value: any) => {
            this.onSelectionChange(value);
        };
        usersList.setChangeHandler(fn);
        return usersList;
    }

    defaultButtonBar(): ButtonBar {
        return new UsersButtonBar(this);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelUsers;
    }

    defaultHeight(): number {
        return SizeConstants.UsersWindowHeight;
    }

    defaultWidth(): number {
        return SizeConstants.UsersWindowWidth;
    }

    getName(): string {
        return (this.detailsPanel as DetailsPanel).getName();
    }

    getPassword(): string {
        return (this.detailsPanel as DetailsPanel).getPassword();
    }

    hasSelectedData(): boolean {
        return this.usersPanel ? this.usersPanel.hasSelectedData() : false;
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
                ErrorManager.logError(ErrorConstants.UsersWindowOnButtonClick, tag);
                break;
        }
    }

    onClose() {
        super.onClose();
        EventBus.unsubscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
        this.usersPanel?.releaseHandlers();
        super.onClose();
    }

    onDelete() {
        this.usersPanel?.deleteUser();
        this.refresh();
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

    onNew() {
        this.usersPanel?.newUser();
        this.refresh();
    }

    onRefresh() {
        this.refresh();
    }

    onRename() {
        const selectedData = this.usersPanel?.getSelectedData();
        if (!selectedData) return;
        const oldName = selectedData.name;
        const newNameFn = (newName: string) => {
            selectedData.name = newName;
            this.save();
        };
        QxPopup.rename(oldName, newNameFn);
    }

    onRestore() {
        this.onResize();
    }

    onSave() {
        this.usersPanel?.updateName(this.getName());
        this.usersPanel?.updatePassword(this.getPassword());
        this.save();
    }

    onSelectionChange(value: any) {
        this.detailsPanel?.setName(value.name);
        this.detailsPanel?.setPassword(value.passwd);
        this.updateEnabledButtons();
    }

    refresh() {
        this.usersPanel?.refresh();
        this.detailsPanel?.clear();
        this.updateEnabledButtons();
    }

    save() {
        this.usersPanel?.saveUser();
        this.refresh();
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
            if (this.saveButton)
                this.saveButton.setEnabled(enabled_3);
        };
        setTimeout(fn, 100);
    }

}

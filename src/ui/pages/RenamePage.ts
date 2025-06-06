import { ActionConstants } from '../../constants/ActionConstants';
import { ErrorConstants } from '../../constants/ErrorConstants';
import { EventConstants } from '../../constants/EventConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { SessionConstants } from '../../constants/SessionConstants';
import { MessageBus } from '../../messages/MessageBus';
import { QxWidget } from '../../qx/ui/mobile/core/QxWidget';
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { SessionStatus } from '../../session/SessionStatus';
import { NotificationManager } from "../../util/NotificationManager";
import { DebugUtil } from '../../util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class RenamePage extends AbstractFormPage {
    id: number = -1;
    newNameField: QxTextField;
    oldNameField: QxTextField;
    renameButton: QxButton | null = null;
    static instance: RenamePage;

    static getInstance(): RenamePage {
        if (!this.instance)
            this.instance = new RenamePage();
        return this.instance;
    }

    static setId(id: number) {
        this.getInstance().setId(id);
    }

    static setOldName(name: string) {
        this.getInstance().setNewName(name);
        this.getInstance().setOldName(name);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageRename);
        this.oldNameField = new QxTextField;
        this.oldNameField.setReadOnly(true);
        this.newNameField = new QxTextField;
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.oldNameField);
        items.push(this.newNameField);
        names.push(LabelConstants.FieldLabelOldName);
        names.push(LabelConstants.FieldLabelNewName);
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ActionRenameLabel,
            LabelConstants.ButtonLabelClear,
        ];
    }

    disableRename() {
        this.renameButton?.setEnabled(false);
    }

    enableRename() {
        this.renameButton?.setEnabled(true);
    }

    getNewName(): string {
        return this.newNameField.getValue();
    }

    getOldName(): string {
        return this.oldNameField.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
        this.renameButton = this.buttonbar.getButtonFromLabel(LabelConstants.ActionRenameLabel);
        if (!SessionStatus.isLoggedIn())
            this.disableRename();
    }

    onClear() {
        this.oldNameField.clear();
        this.newNameField.clear();
    }

    onRename() {
        const newName = this.getNewName();
        const oldName = this.getOldName();
        if (newName.length < 5) {
            NotificationManager.onError(ErrorConstants.ProjectNameError);
            return;
        }
        ProjectsPage.rename(newName);
        this.showProjects();
        ProjectsPage.refresh();
    }

    onSessionStatusChanged(message: any) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
                this.enableRename();
                break;
            default:
                this.disableRename();
                break;
        }
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionRename:
                this.onRename();
                break;
            default:
                DebugUtil.log('RenamePage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setId(id: number) {
        this.id = id;
    }

    setNewName(newName: string) {
        this.newNameField.setValue(newName);
    }

    setOldName(oldName: string) {
        this.oldNameField.setValue(oldName);
    }

}

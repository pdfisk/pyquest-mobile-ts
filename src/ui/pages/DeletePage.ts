import { ActionConstants } from '../../constants/ActionConstants';
import { EventConstants } from '../../constants/EventConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { SessionConstants } from '../../constants/SessionConstants';
import { MessageBus } from '../../messages/MessageBus';
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { SessionStatus } from "../../session/SessionStatus";
import { PyModulesLocalStore } from '../../vm/data/stores/modules/PyModulesLocalStore';
import { DebugUtil } from '../../vm/util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class DeletePage extends AbstractFormPage {
    deleteButton: QxButton | null = null;
    id: number = -1;
    oldNameField: QxTextField;
    static instance: DeletePage;

    static getInstance(): DeletePage {
        if (!this.instance)
            this.instance = new DeletePage();
        return this.instance;
    }

    static setId(id: number) {
        this.getInstance().setId(id);
    }

    static setOldName(oldName: string) {
        this.getInstance().setOldName(oldName);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageDelete);
        this.oldNameField = new QxTextField;
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.oldNameField);
        names.push(LabelConstants.FieldLabelOldName);
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ActionDeleteLabel,
            LabelConstants.ButtonLabelClear,
        ];
    }

    disableDelete() {
        this.deleteButton?.setEnabled(false);
    }

    enableDelete() {
        this.deleteButton?.setEnabled(true);
    }

    getOldName(): string {
        return this.oldNameField.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
       super.onAppear();
        this.addPageContent();
        this.deleteButton = this.buttonbar.getButtonFromLabel(LabelConstants.ActionDeleteLabel);
        if (!SessionStatus.isLoggedIn())
            this.disableDelete();
    }

    onClear() {
        this.oldNameField.clear();
    }

    onDelete() {
        PyModulesLocalStore.getInstance().deleteRecord(this.id);
        this.showProjects();
        ProjectsPage.refresh();
    }

    onSessionStatusChanged(message: any) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
                this.enableDelete();
                break;
            default:
                this.disableDelete();
                break;
        }
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionDelete:
                this.onDelete();
                break;
            default:
                DebugUtil.log('DeletePage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setId(id: number) {
        this.id = id;
    }

    setOldName(oldName: string) {
        this.oldNameField.setValue(oldName);
    }

}

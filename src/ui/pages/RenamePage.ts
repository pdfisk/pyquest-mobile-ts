import { ActionConstants, ErrorConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { NotificationManager } from "../../util/NotificationManager";
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class RenamePage extends AbstractFormPage {
    oldNameField: QxTextField;
    newNameField: QxTextField;
    static instance: RenamePage;

    static getInstance(): RenamePage {
        if (!this.instance)
            this.instance = new RenamePage();
        return this.instance;
    }

    static setOldName(oldName: string) {
        this.getInstance().setOldName(oldName);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageRename);
        this.oldNameField = new QxTextField;
        this.oldNameField.setEnabled(false);
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
            LabelConstants.ButtonLabelRename,
            LabelConstants.ButtonLabelClear,
        ];
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
        ProjectsPage.rename(oldName, newName);
    }

    onSessionStatusChanged(message: any) {
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
                console.log('RenamePage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setOldName(oldName: string) {
        this.oldNameField.setValue(oldName);
    }

}

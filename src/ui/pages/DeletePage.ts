import { ActionConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { ProjectsStore } from "../../data";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class DeletePage extends AbstractFormPage {
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
            LabelConstants.ButtonLabelDelete,
            LabelConstants.ButtonLabelClear,
        ];
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
    }

    onDelete() {
        ProjectsStore.deleteRecord(this.id);
        this.showProjects();
        ProjectsPage.refresh();
    }

    onSessionStatusChanged(message: any) {
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
                console.log('DeletePage onTap', action);
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

import { ActionConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { ProjectsStore } from "../../data";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class SelectPage extends AbstractFormPage {
    newNameField: QxTextField;
    static instance: SelectPage;

    static getInstance(): SelectPage {
        if (!this.instance)
            this.instance = new SelectPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageSelect);
        this.newNameField = new QxTextField;
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        items.push(this.newNameField);
        names.push(LabelConstants.FieldLabelNewName);
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelNew,
            LabelConstants.ButtonLabelClear,
        ];
    }

    getNewName(): string {
        return this.newNameField.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onClear() {
        this.newNameField.clear();
    }

    onNew() {
        ProjectsStore.newRecord(this.getNewName());
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
            case ActionConstants.ActionNew:
                this.onNew();
                break;
            default:
                console.log('SelectPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

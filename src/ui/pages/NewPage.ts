import { ActionConstants } from '../../constants/ActionConstants';
import { EventConstants } from '../../constants/EventConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from '../../messages/MessageBus';
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { DebugUtil } from '../../vm/util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class NewPage extends AbstractFormPage {
    newNameField: QxTextField;
    static instance: NewPage;

    static getInstance(): NewPage {
        if (!this.instance)
            this.instance = new NewPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageNew);
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
            LabelConstants.ActionNewLabel,
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
        // ProjectsStore.newRecord(this.getNewName());
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
                DebugUtil.log('NewPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

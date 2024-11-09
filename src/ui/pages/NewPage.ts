import { ActionConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";

export class NewPage extends AbstractFormPage {
    oldNameField: QxTextField;
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
        this.oldNameField = new QxTextField;
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
            LabelConstants.ButtonLabelNew,
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

    onDelete() {
        console.log('onDelete');
    }

    onSessionStatusChanged(message: any) {
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionNew:
                this.onDelete();
                break;
            default:
                console.log('NewPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

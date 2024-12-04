import { ActionConstants, EventConstants, SessionConstants, SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { SessionStatus } from "../../session";
import { DetailsPanel } from "../widgets/DetailsPanel";
import { AbstractPage } from "./abstract/AbstractPage";
import { EditorPage } from "./EditorPage";
import { ProjectsPage } from "./ProjectsPage";

export class DetailsPage extends AbstractPage {
    detailsPanel: DetailsPanel = new DetailsPanel;
    saveButton: QxButton | null = null;
    static instance: DetailsPage;

    static getCategory(): string {
        return this.getInstance().getCategory();
    }

    static getDescription(): string {
        return this.getInstance().getDescription();
    }

    static getInstance(): DetailsPage {
        if (!this.instance)
            this.instance = new DetailsPage();
        return this.instance;
    }

    static setCategory(category: string) {
        this.getInstance().setCategory(category);
    }

    static setDescription(description: string) {
        this.getInstance().setDescription(description);
    }

    static setName(name: string) {
        this.getInstance().setName(name);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageDetails);
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        this.addContentWidget(this.detailsPanel);
    }

    defaultButtons(): string[] {
        if (SessionStatus.isLoggedInAsAdmin())
            return [
                LabelConstants.ButtonLabelClear,
                LabelConstants.ButtonLabelEditor,
                LabelConstants.ButtonLabelSave
            ]
        else
            return [LabelConstants.ButtonLabelBack];
    }

    disableSave() {
        this.saveButton?.setEnabled(false);
    }

    enableSave() {
        this.saveButton?.setEnabled(true);
    }

    getCategory(): string {
        return this.detailsPanel.getCategory();
    }

    getDescription(): string {
        return this.detailsPanel.getDescription();
    }

    isContentReady(): boolean {
        return true;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
        this.resize();
        this.saveButton = this.buttonbar.getButtonFromLabel(LabelConstants.ButtonLabelSave);
        if (!SessionStatus.isLoggedIn())
            this.disableSave();
    }

    onClear() {
        this.detailsPanel.clear();
    }

    onEditor() {
        this.showEditor();
    }

    onSave() {
        const category = this.getCategory();
        const description = this.getDescription();
        const code = EditorPage.getCode();
        const codeObject = EditorPage.getCodeObject();
        ProjectsPage.save(category, description, code, codeObject);
    }

    onSessionStatusChanged(message: any) {
        const data: any = message.getData();
        const statusObj: any = data[0];
        const status: string = statusObj.status;
        switch (status) {
            case SessionConstants.SessionLoggedInAsAdmin:
                this.enableSave();
                break;
            default:
                this.disableSave();
                break;
        }
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionBack:
                this.onBack();
                break;
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionEditor:
                this.onEditor();
                break;
            case ActionConstants.ActionSave:
                this.onSave();
                break;
            default:
                console.log('DetailsPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
        this.detailsPanel.setHeightPx(adjustedHeight - SizeConstants.PageHeightOffset);
    }

    setCategory(category: string) {
        this.detailsPanel.setCategory(category);
    }

    setDescription(description: string) {
        this.detailsPanel.setDescription(description);
    }

    setName(name: string) {
        this.detailsPanel.setName(name);
    }

}

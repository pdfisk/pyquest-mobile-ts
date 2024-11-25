import { ActionConstants, SizeConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { DetailsPanel } from "../widgets/DetailsPanel";
import { AbstractPage } from "./abstract/AbstractPage";

export class DetailsPage extends AbstractPage {
    detailsPanel: DetailsPanel = new DetailsPanel;
    static instance: DetailsPage;

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
    }

    addPageContent() {
        this.addContentWidget(this.detailsPanel);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelClear
        ];
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
    }

    onClear() {
        this.detailsPanel.clear();
    }

    onSessionStatusChanged(message: any) {
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
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

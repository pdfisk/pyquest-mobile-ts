import { ActionConstants, FontConstants, SizeConstants } from "../../constants";
import { CategoryConstants } from "../../constants/CategoryConstants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxSelectBox } from "../../qx/ui/mobile/form/QxSelectBox";
import { QxTextArea } from "../../qx/ui/mobile/form/QxTextArea";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { CategoryUtil } from "../../util/CategoryUtil";
import { DetailsPanel } from "../widgets/DetailsPanel";
import { AbstractPage } from "./abstract/AbstractPage";

export class DetailsPage extends AbstractPage {
    category: QxTextField = new QxTextField;
    description: QxTextArea = new QxTextArea;
    detailsPanel: DetailsPanel = new DetailsPanel;
    name: QxTextField = new QxTextField;
    selectBox: QxSelectBox = new QxSelectBox;
    static instance: DetailsPage;

    static getInstance(): DetailsPage {
        if (!this.instance)
            this.instance = new DetailsPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageDetails);
        this.name.setFontWeight(FontConstants.FontWeightBold);
        this.name.setReadOnly(true);
        this.name.setActivatable(false);
        this.category.setFontWeight(FontConstants.FontWeightBold);
        this.category.setReadOnly(true);
        this.category.setActivatable(false);
        this.showCurrentCategory(CategoryConstants.CategoryLabelAll);
        this.selectBox.setModel(CategoryUtil.getCategories());
        this.selectBox.setPlaceholder(CategoryConstants.CategoryPlaceholder);
        (window as any).X = this;
    }

    addPageContent() {
        this.addContentWidget(this.detailsPanel);
        // const items: QxWidget[] = [];
        // const names: string[] = [];
        // items.push(this.name);
        // items.push(this.category);
        // items.push(this.selectBox);
        // items.push(this.description);
        // names.push(LabelConstants.FieldLabelName);
        // names.push(LabelConstants.FieldLabelCategory);
        // names.push(LabelConstants.FieldLabelCategories);
        // names.push(LabelConstants.FieldLabelDescription);
        // this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelClear
        ];
    }

    getNewName(): string {
        return this.name.getValue();
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
        this.name.clear();
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

    showCurrentCategory(value: string) {
        this.category.setValue(value);
    }

}

import { ActionConstants, EventConstants, FontConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxSelectBox } from "../../qx/ui/mobile/form/QxSelectBox";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class SelectPage extends AbstractFormPage {
    currentSelection: QxTextField = new QxTextField;
    selectBox: QxSelectBox;
    static instance: SelectPage;

    static getInstance(): SelectPage {
        if (!this.instance)
            this.instance = new SelectPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageSelect);
        this.currentSelection.setFontWeight(FontConstants.FontWeightBold);
        this.currentSelection.setReadOnly(true)
        this.showCurrentCategory(LabelConstants.CategoryLabelAll);
        const items = [
            LabelConstants.CategoryLabelAll,
            LabelConstants.CategoryLabelGames,
            LabelConstants.CategoryLabelStories,
            LabelConstants.CategoryLabelTutorials
        ]
        this.selectBox = new QxSelectBox;
        const fn = (evt: any) => { this.onChangeSelectBoxSelection(evt) };
        this.selectBox.setModel(items);
        this.selectBox.setChangeFunction(fn);
        this.selectBox.setPlaceholder(LabelConstants.CategoryPlaceholder);
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        if (this.selectBox !== null) {
            items.push(this.selectBox);
            names.push(LabelConstants.FieldLabelCategories);
            items.push(this.currentSelection);
            names.push(LabelConstants.CategoryLabelCurrent);
        }
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ActionApplyLabel,
            LabelConstants.ButtonLabelCancel,
        ];
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onApply() {
        console.log('onApply');
        this.showProjects();
        // ProjectsStore.newRecord(this.getNewName());
        // this.showProjects();
        // ProjectsPage.refresh();
    }

    onCancel() {
        this.showProjects();
    }

    onCategoryAll() {
        this.showCurrentCategory(LabelConstants.CategoryLabelAll);
    }

    onCategoryGames() {
        this.showCurrentCategory(LabelConstants.CategoryLabelGames);
    }

    onCategoryStories() {
        this.showCurrentCategory(LabelConstants.CategoryLabelStories);
    }

    onCategoryTutorials() {
        this.showCurrentCategory(LabelConstants.CategoryLabelTutorials);
    }

    onChangeSelectBoxSelection(evt: any) {
        const data = evt.getData();
        const index: number = data.index;
        switch (index) {
            case LabelConstants.CategoryIndexAll:
                this.onCategoryAll();
                break;
            case LabelConstants.CategoryIndexGames:
                this.onCategoryGames();
                break;
            case LabelConstants.CategoryIndexStories:
                this.onCategoryStories();
                break;
            case LabelConstants.CategoryIndexTutorials:
                this.onCategoryTutorials();
                break;
        }
    }

    onSessionStatusChanged(message: any) {
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionApply:
                this.onApply();
                break;
            case ActionConstants.ActionCancel:
                this.onCancel();
                break;
            default:
                console.log('SelectPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    showCurrentCategory(category: string) {
        this.currentSelection.setValue(category);
    }

    showProjects() {
        ProjectsPage.resetSelectBox();
        super.showProjects();
    }

}

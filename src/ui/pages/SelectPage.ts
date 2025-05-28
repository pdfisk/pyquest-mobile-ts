import { ActionConstants } from '../../constants/ActionConstants';
import { CategoryConstants } from "../../constants/CategoryConstants";
import { EventConstants } from '../../constants/EventConstants';
import { FontConstants } from '../../constants/FontConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from '../../messages/MessageBus';
import { QxWidget } from "../../qx/ui/mobile/core/QxWidget";
import { QxSelectBox } from "../../qx/ui/mobile/form/QxSelectBox";
import { QxTextField } from "../../qx/ui/mobile/form/QxTextField";
import { CategoryUtil } from "../../util/CategoryUtil";
import { DebugUtil } from '../../util/DebugUtil';
import { AbstractFormPage } from "./abstract/AbstractFormPage";
import { ProjectsPage } from "./ProjectsPage";

export class SelectPage extends AbstractFormPage {
    currentSelection: QxTextField = new QxTextField;
    selectBox: QxSelectBox= new QxSelectBox;
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
        this.showCurrentCategory(CategoryConstants.CategoryLabelAll);
        const items = CategoryUtil.getCategories();
        const fn = (evt: any) => { this.onChangeSelectBoxSelection(evt) };
        this.selectBox.setModel(items);
        this.selectBox.setChangeFunction(fn);
        this.selectBox.setPlaceholder(CategoryConstants.CategoryPlaceholder);
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    addPageContent() {
        const items: QxWidget[] = [];
        const names: string[] = [];
        if (this.selectBox !== null) {
            items.push(this.selectBox);
            names.push(LabelConstants.FieldLabelCategories);
            items.push(this.currentSelection);
            names.push(CategoryConstants.CategoryLabelCurrent);
        }
        this.addItems(items, names);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ActionApplyLabel,
            LabelConstants.ButtonLabelCancel,
        ];
    }

    getCurrentSelection(): string {
        return this.currentSelection.getValue();
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.addPageContent();
    }

    onApply() {
        this.showProjects();
        ProjectsPage.selectCategory(this.getCurrentSelection());
    }

    onCancel() {
        this.showProjects();
    }

    onCategoryAll() {
        this.showCurrentCategory(CategoryConstants.CategoryLabelAll);
    }

    onCategoryGames() {
        this.showCurrentCategory(CategoryConstants.CategoryLabelGames);
    }

    onCategoryStories() {
        this.showCurrentCategory(CategoryConstants.CategoryLabelStories);
    }

    onCategoryTutorials() {
        this.showCurrentCategory(CategoryConstants.CategoryLabelTutorials);
    }

    onChangeSelectBoxSelection(evt: any) {
        const data = evt.getData();
        const index: number = data.index;
        switch (index) {
            case CategoryConstants.CategoryIndexAll:
                this.onCategoryAll();
                break;
            case CategoryConstants.CategoryIndexGames:
                this.onCategoryGames();
                break;
            case CategoryConstants.CategoryIndexStories:
                this.onCategoryStories();
                break;
            case CategoryConstants.CategoryIndexTutorials:
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
                DebugUtil.log('SelectPage onTap', action);
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

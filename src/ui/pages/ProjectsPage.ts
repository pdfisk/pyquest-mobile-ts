import { ActionConstants } from "../../constants";
import { CategoryConstants } from "../../constants/CategoryConstants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { StringUtil } from "../../util";
import { AbstractDataListPage } from "./abstract/AbstractDataListPage";
import { DeletePage } from "./DeletePage";
import { DetailsPage } from "./DetailsPage";
import { EditorPage } from "./EditorPage";
import { RenamePage } from "./RenamePage";

export class ProjectsPage extends AbstractDataListPage {
    categoryLabel: string = CategoryConstants.CategoryTagAll;
    selectedIndex: number = LabelConstants.SelectionUnselectedIndex;
    static instance: ProjectsPage;

    static getCategoryTag(): string {
        return this.getInstance().getCategoryTag();
    }

    static getInstance(): ProjectsPage {
        if (!this.instance)
            this.instance = new ProjectsPage();
        return this.instance;
    }

    static getSelectedId(): number {
        return this.getInstance().getSelectedId();
    }

    static getSelectedName(): string | null {
        return this.getInstance().getSelectedName();
    }

    static getSelectedRecord(): any {
        return this.getInstance().getSelectedRecord();
    }

    static rename(newName: string) {
        this.getInstance().rename(newName);
    }

    static refresh() {
        this.getInstance().refresh();
    }

    static resetSelectBox() {
        this.getInstance().resetSelectBox();
    }

    static save(category: string, description: string, code: string, codeObject: string | null) {
        this.getInstance().save(category, description, code, codeObject);
    }

    static selectCategory(label: string) {
        this.getInstance().selectCategory(label);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageProjects);
    }

    addExtraButtons() {
        super.addExtraButtons();
        const items = [
            LabelConstants.ActionSelectLabel,
            LabelConstants.ActionOpenLabel,
            LabelConstants.ActionRenameLabel,
            LabelConstants.ActionNewLabel,
            LabelConstants.ActionDeleteLabel
        ]
        const fn = (evt: any) => { this.onChangeSelectBoxSelection(evt) };
        this.addSelectBox(items, fn);
        this.resetSelectBox();
    }

    addSelectionCss(index: number) {
        const item = this.getSelectedRecordFromIndex(index);
        if (!item) return;
    }

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelRefresh];
    }

    getCategoryTag(): string {
        return this.categoryLabel;
    }

    getListConfig(): any {
        const me = this;
        return {
            configureItem(item: any, data: any) {
                if (data.getId() === me.getSelectedId())
                    item.setSelected(true);
                else
                    item.setSelected(false);
                item.setTitle(data.getName());
                item.setSubtitle(data.getUpdated_at());
            },
        };
    }

    getListKey(data: any): string {
        return data.name;
    }

    getOnChangeFn(): Function {
        return (evt: any) => {
            const index: number = evt.getData();
            this.onChangeListSelection(index);
        };
    }

    getSelectBoxIndex(): number {
        if (this.selectBox)
            return this.selectBox.getSelection();
        return -1;
    }

    getSelectedCategory(): string {
        const record = this.getSelectedRecord();
        if (!record)
            return CategoryConstants.CategoryLabelAll;
        return record.getCategory();
    }

    getSelectedCode(): string {
        const record = this.getSelectedRecord();
        if (!record)
            return '';
        return record.getCode();
    }

    getSelectedCodeObject(): string {
        const record = this.getSelectedRecord();
        if (!record)
            return '';
        return record.getCode_object();
    }

    getSelectedDescription(): string {
        const record = this.getSelectedRecord();
        if (!record)
            return '';
        return record.getDescription();
    }

    getSelectedId(): number {
        const record = this.getSelectedRecord();
        if (!record)
            return -1;
        return record.getId();
    }

    getSelectedName(): string {
        const record = this.getSelectedRecord();
        if (!record)
            return '';
        return record.getName();
    }

    getSelectedRecord(): any {
        return this.getSelectedRecordFromIndex(this.selectedIndex);
    }

    getSelectedRecordFromIndex(index: number): any {
        if (!this.list || index === LabelConstants.SelectionUnselectedIndex)
            return null;
        return this.list.getItem(index);
    }

    getStore(): AbstractStore {
        return ProjectsStore.getInstance();
    }

    onChangeListSelection(index: number) {
        this.removeSelectionCss(this.selectedIndex);
        this.selectedIndex = index;
        if (this.selectedIndex === LabelConstants.SelectionUnselectedIndex)
            return;
        this.addSelectionCss(this.selectedIndex);
        switch (this.getSelectBoxIndex()) {
            case LabelConstants.ActionDeleteIndex:
                this.onDelete();
                break;
            case LabelConstants.ActionOpenIndex:
                this.onOpen();
                break;
            case LabelConstants.ActionRenameIndex:
                this.onRename();
                break;
            default:
                console.log('unknown selectbox selection');
                break;
        }
    }

    onChangeSelectBoxSelection(evt: any) {
        if (this.selectedIndex === LabelConstants.SelectionUnselectedIndex)
            return;
        const index: number | undefined = this.selectBox?.getSelection();
        switch (index) {
            case LabelConstants.ActionDeleteIndex:
                this.onDelete();
                break;
            case LabelConstants.ActionNewIndex:
                this.onNew();
                break;
            case LabelConstants.ActionRenameIndex:
                this.onRename();
                break;
            case LabelConstants.ActionSelectIndex:
                this.onSelect();
                break;
        }
    }

    onDelete() {
        const name = this.getSelectedName()
        const id = this.getSelectedId();
        if (!name) return;
        DeletePage.setId(id);
        DeletePage.setOldName(name);
        this.showDelete();
    }

    onNew() {
        this.showNew();
    }

    onOpen() {
        const category = this.getSelectedCategory();
        const code = this.getSelectedCode()
        const codeObject = this.getSelectedCodeObject();
        const description = this.getSelectedDescription();
        const name = this.getSelectedName();
        EditorPage.setCode(code);
        EditorPage.setCodeObject(codeObject);
        DetailsPage.setCategory(category);
        DetailsPage.setDescription(description);
        DetailsPage.setName(name);
        this.showEditor();
    }

    onRefresh() {
        this.refresh();
    }

    onRename() {
        const name = this.getSelectedName();
        const id = this.getId();
        if (!name) return;
        RenamePage.setOldName(name);
        RenamePage.setId(id);
        this.showRename();
    }

    onSelect() {
        this.showSelect();
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionRefresh:
                this.onRefresh();
                break;
            default:
                console.log('ProjectsPage onTap', action);
                break;
        }
    }

    refresh() {
        this.selectedIndex = LabelConstants.SelectionUnselectedIndex;
        this.setSelectionBoxSelection(LabelConstants.ActionOpenIndex);
        this.getStore().reload();
    }

    removeSelectionCss(index: number) {
        const item = this.getSelectedRecordFromIndex(index);
        if (!item) return;
        console.log('addSelectionCss', item);
    }

    rename(newName: string) {
        const record = this.getSelectedRecord();
        if (!record) return;
        record.setName(newName);
        this.dataStore.saveRecord(record);
    }

    resetSelectBox() {
        this.setSelectionBoxSelection(LabelConstants.ActionOpenIndex);
    }

    save(category: string, description: string, code: string, codeObject: string | null) {
        const record = this.getSelectedRecord();
        record.setCategory(category);
        record.setDescription(description);
        record.setCode(code);
        record.setCode_object(codeObject);
        this.dataStore.saveRecord(record);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    selectCategory(label: string) {
        this.categoryLabel = label;
        const tag = StringUtil.asTag(label);
        this.dataStore.setCategoryFilter(tag);
        // MessageBus.dispatch(EventConstants.CatagoryChanged);
    }

}

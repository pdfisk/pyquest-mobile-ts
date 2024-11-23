import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { AbstractDataListPage } from "./abstract/AbstractDataListPage";
import { DeletePage } from "./DeletePage";
import { EditorPage } from "./EditorPage";
import { RenamePage } from "./RenamePage";

export class ProjectsPage extends AbstractDataListPage {
    categoryTag: string = LabelConstants.CategoryTagAll;
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

    static save(code: string, codeObject: string | null) {
        this.getInstance().save(code, codeObject);
    }

    static setCategoryTag(tag: string) {
        this.getInstance().setCategoryTag(tag);
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

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelRefresh];
    }

    getCategoryTag(): string {
        return this.categoryTag;
    }

    getListConfig(): any {
        return {
            configureItem(item: any, data: any) {
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
            const index: number = this.getSelectBoxIndex();
            this.onChangeSelection(index);
        };
    }

    getSelectBoxIndex(): number {
        if (this.selectBox)
            return this.selectBox.getSelection();
        return -1;
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

    getSelectedId(): number {
        const record = this.getSelectedRecord();
        if (!record)
            return -1;
        return record.getId();
    }

    getSelectedName(): string | null {
        const record = this.getSelectedRecord();
        if (!record)
            return null;
        return record.getName();
    }

    getSelectedRecord(): any {
        if (this.selectedIndex === LabelConstants.SelectionUnselectedIndex)
            return null;
        return this.list.getItem(this.selectedIndex);
    }

    getStore(): AbstractStore {
        return ProjectsStore.getInstance();
    }

    onChangeSelectBoxSelection(evt: any) {
        const index: number | undefined = this.selectBox?.getSelection();
        switch (index) {
            case LabelConstants.ActionDeleteIndex:
                this.onDelete(index);
                break;
            case LabelConstants.ActionNewIndex:
                this.onNew();
                break;
            case LabelConstants.ActionRenameIndex:
                this.onRename(index);
                break;
            case LabelConstants.ActionSelectIndex:
                this.onSelect();
                break;
        }
    }

    onChangeSelection(index: number) {
        this.selectedIndex = index;
        switch (this.getSelectBoxIndex()) {
            case LabelConstants.ActionDeleteIndex:
                this.onDelete(index);
                break;
            case LabelConstants.ActionOpenIndex:
                this.onOpen(index);
                break;
            case LabelConstants.ActionRenameIndex:
                this.onRename(index);
                break;
            default:
                console.log('unknown selectbox selection');
                break;
        }
    }

    onDelete(index: number) {
        this.selectedIndex = index;
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

    onOpen(index: number) {
        if (index === LabelConstants.SelectionUnselectedIndex)
            return;
        this.selectedIndex = index;
        const code = this.getSelectedCode()
        const codeObject = this.getSelectedCodeObject();
        EditorPage.setCode(code);
        EditorPage.setCodeObject(codeObject);
        this.showEditor();
    }

    onRefresh() {
        this.refresh();
    }

    onRename(index: number) {
        this.selectedIndex = index;
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

    rename(newName: string) {
        const record = this.getSelectedRecord();
        if (!record) return;
        record.setName(newName);
        this.dataStore.saveRecord(record);
    }

    resetSelectBox() {
        this.setSelectionBoxSelection(LabelConstants.ActionOpenIndex);
    }

    save(code: string, codeObject: string | null) {
        const record = this.getSelectedRecord();
        record.setCode(code);
        record.setCode_object(codeObject);
        this.dataStore.saveRecord(record);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setCategoryTag(tag: string) {
        console.log('setCategoryTag', tag);
        this.categoryTag = tag;
    }

}

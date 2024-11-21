import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { AbstractDataListPage } from "./abstract/AbstractDataListPage";
import { DeletePage } from "./DeletePage";
import { EditorPage } from "./EditorPage";
import { RenamePage } from "./RenamePage";

export class ProjectsPage extends AbstractDataListPage {
    selectedIndex: number = LabelConstants.SelectionUnselectedIndex;
    static instance: ProjectsPage;

    static getInstance(): ProjectsPage {
        if (!this.instance)
            this.instance = new ProjectsPage();
        return this.instance;
    }

    static getSelectedRecord(): any {
        return this.getInstance().getSelectedRecord();
    }

    static rename(oldName: string, newName: string) {
        this.getInstance().rename(oldName, newName);
    }

    static refresh() {
        this.getInstance().refresh();
    }

    static save(code: string, codeObject: string | null) {
        this.getInstance().save(code, codeObject);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageProjects);
    }

    addExtraButtons() {
        super.addExtraButtons();
        const items = [
            LabelConstants.ButtonLabelOpen,
            LabelConstants.ButtonLabelRename,
            LabelConstants.ButtonLabelNew,
            LabelConstants.ButtonLabelDelete
        ]
        const fn = (evt: any) => { this.onChangeSelectBoxSelection(evt) };
        this.addSelectBox(items, fn);
        this.setSelectionBoxSelection(LabelConstants.SelectBoxOpenIndex);
    }

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelRefresh];
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
            const index: number = evt.getData();
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
        const data = evt.getData();
        const index: number = data.index;
        switch (index) {
            case LabelConstants.SelectBoxDeleteIndex:
                this.onDelete(index);
                break;
            case LabelConstants.SelectBoxNewIndex:
                this.onNew();
                break;
            case LabelConstants.SelectBoxRenameIndex:
                this.onRename(index);
                break;
        }
    }

    onChangeSelection(index: number) {
        this.selectedIndex = index;
        switch (this.getSelectBoxIndex()) {
            case LabelConstants.SelectBoxDeleteIndex:
                this.onDelete(index);
                break;
            case LabelConstants.SelectBoxOpenIndex:
                this.onOpen(index);
                break;
            case LabelConstants.SelectBoxRenameIndex:
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
        if (!name) return;
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
        const name = this.getSelectedName()
        if (!name) return;
        RenamePage.setOldName(name);
        this.showRename();
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

    rename(oldName: string, newName: string) {
        console.log('RENAME', oldName, newName);
    }

    refresh() {
        this.selectedIndex = LabelConstants.SelectionUnselectedIndex;
        this.setSelectionBoxSelection(LabelConstants.SelectBoxOpenIndex);
        this.getStore().reload();
    }

    save(code: string, codeObject: string | null) {
        const record = this.getSelectedRecord();
        record.setCode(code);
        record.setCode_object(codeObject);
        this.dataStore.saveRecord(record);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

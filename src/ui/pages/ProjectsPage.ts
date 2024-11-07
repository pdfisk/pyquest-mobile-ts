import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractStore, ProjectsStore } from "../../data";
import { AbstractDataListPage } from "./abstract/AbstractDataListPage";
import { EditorPage } from "./EditorPage";

export class ProjectsPage extends AbstractDataListPage {
    selectedIndex: number;
    static instance: ProjectsPage;

    static getInstance(): ProjectsPage {
        if (!this.instance)
            this.instance = new ProjectsPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageProjects);
        this.selectedIndex = LabelConstants.SelectionUnselectedIndex;
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

    getStore(): AbstractStore {
        return ProjectsStore.getInstance();
    }

    onChangeSelectBoxSelection(evt: any) {
        const data = evt.getData();
        const index: number = data.index;
        switch (index) {
            case LabelConstants.SelectBoxNewIndex:
                this.onNew();
                break;
        }
    }

    onChangeSelection(index: number) {
        this.selectedIndex = index;
        switch (this.getSelectBoxIndex()) {
            case LabelConstants.SelectBoxDeleteIndex:
                this.onDelete(index);
                break;
            case LabelConstants.SelectBoxNewIndex:
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
        console.log('onDelete', index);
        this.setSelectionBoxSelection(LabelConstants.SelectBoxOpenIndex);
    }

    onNew() {
        console.log('onNew');
        this.setSelectionBoxSelection(LabelConstants.SelectBoxOpenIndex);
    }

    onOpen(index: number) {
        this.selectedIndex = index;
        const record = this.list.getItem(index);
        const code = record.getCode();
        const codeObject = record.getCode_object();
        EditorPage.setCode(code);
        EditorPage.setCodeObject(codeObject);
        this.showEditor();
    }

    onRefresh() {
        this.selectedIndex = LabelConstants.SelectionUnselectedIndex;
        this.getStore().reload();
    }

    onRename(index: number) {
        console.log('onRename', index);
        this.setSelectionBoxSelection(LabelConstants.SelectBoxOpenIndex);
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

    save(code:string) {
        console.log('ProjectPage SAVE');
        
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

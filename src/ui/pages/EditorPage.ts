import { ActionConstants } from "../../constants";
import { EditorConstants } from "../../constants/EditorConstants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class EditorPage extends AbstractPage {
    ace: any;
    editor: any;
    initValue: string = '';
    static instance: EditorPage;

    static getInstance(): EditorPage {
        if (!this.instance)
            this.instance = new EditorPage();
        return this.instance;
    }

    static setCode(code: string) {
        this.getInstance().setValue(code);
    }

    private constructor() {
        super();
        this.ace = (window as any).ace;
        this.setTitle(LabelConstants.PageEditor);
    }

    defaultButtons(): string[] {
        return ['Run', 'Clear'];
    }

    onAppear() {
        super.onAppear();
        const cfg: any = { mode: EditorConstants.ModePython };
        this.editor = this.ace.edit(this.getContentElement(), cfg);
        this.setValue(this.initValue);
    }

    onClear() {
        console.log('onClear');
    }

    onRun() {
        console.log('onRun');
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionRun:
                this.onRun();
                break;
            default:
                console.log('onTap', action);
                break;
        }
    }

    setLine(line: number) {
        if (this.editor)
            this.editor.moveCursorTo(line - 1, 0);
    }

    setRange(startRow: number, startCol: number, endRow: number, endCol: number) {
        if (this.editor)
            this.editor.selection.setRange(new this.ace.Range(startRow, startCol, endRow, endCol));
    }

    setValue(value: string) {
        if (this.editor) {
            this.editor.setValue(value);
            this.setLine(0);
        }
        else
            this.initValue = value;
        this.setRange(0, 0, 0, 0);
    }

}

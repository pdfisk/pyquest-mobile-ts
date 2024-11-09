import { VmApi } from "../../api";
import { ActionConstants, EventConstants, SessionConstants } from "../../constants";
import { EditorConstants } from "../../constants/EditorConstants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageConstants } from "../../constants/MessageConstants";
import { MessageBus } from "../../messages";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { StringUtil } from "../../util/StringUtil";
import { AbstractPage } from "./abstract/AbstractPage";
import { ProjectsPage } from "./ProjectsPage";

export class EditorPage extends AbstractPage {
    ace: any;
    codeObject: string | null;
    editor: any = undefined;
    initValue: string = '';
    saveButton: QxButton | null = null;
    static instance: EditorPage;

    static getInstance(): EditorPage {
        if (!this.instance)
            this.instance = new EditorPage();
        return this.instance;
    }

    static setCode(code: string) {
        this.getInstance().setCode(code);
    }

    static setCodeObject(codeObject: string | null) {
        this.getInstance().setCodeObject(codeObject);
    }

    private constructor() {
        super();
        this.ace = (window as any).ace;
        this.codeObject = null;
        this.setTitle(LabelConstants.PageEditor);
        MessageBus.subscribe(EventConstants.EventSessionStatusChanged, this.onSessionStatusChanged, this);
    }

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelRun, LabelConstants.ButtonLabelClear, LabelConstants.ButtonLabelSave];
    }

    disableSave() {
        this.saveButton?.setEnabled(false);
    }

    enableSave() {
        this.saveButton?.setEnabled(true);
    }

    getCode(): string {
        if (this.editor)
            return this.editor.getValue();
        return '';
    }

    getCodeObject(): string | null {
        return this.codeObject;
    }

    isContentReady(): boolean {
        return this.editor !== undefined;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.saveButton = this.buttonbar.getButtonFromLabel(LabelConstants.ButtonLabelSave);
        this.disableSave();
        const cfg: any = { mode: EditorConstants.ModePython };
        this.editor = this.ace.edit(this.getContentElement(), cfg);
        this.setCode(this.initValue);
        if (this.deferredHeight > 0)
            this.setEditorHeight(this.deferredHeight);;
    }

    onClear() {
        this.setCode('');
        this.setCodeObject(null);
    }

    onRun() {
        const codeObject = this.getCodeObject();
        if (codeObject)
            VmApi.runCompiled(codeObject);
        else {
            const code = this.getCode();
            const fn = () => {
                const compiledObjectJson = VmApi.compileToJson(code);
                if (compiledObjectJson) {
                    this.setCodeObject(compiledObjectJson.compiledObjectJson);
                    VmApi.runCompiled(compiledObjectJson.compiledObjectJson);
                }
                MessageBus.dispatch(EventConstants.DrawerCloseTop);
            };
            MessageBus.dispatch(EventConstants.DrawerOpenTop, MessageConstants.Compiling, fn);
        }
    }

    onSave() {
        const code = this.getCode();
        const codeObject = this.getCodeObject();
        ProjectsPage.save(code, codeObject);
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
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionRun:
                this.onRun();
                break;
            case ActionConstants.ActionSave:
                this.onSave();
                break;
            default:
                console.log('EditorPage onTap', action);
                break;
        }
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setEditorHeight(adjustedHeight);
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

    setAdjustedWidth(adjustedHeight: number): void {
    }

    setCode(value: string) {
        if (this.editor) {
            this.editor.setValue(value);
            this.setLine(0);
        }
        else
            this.initValue = value;
        this.setRange(0, 0, 0, 0);
    }

    setCodeObject(value: string | null) {
        this.codeObject = value;
    }

    setEditorHeight(height: number) {
        this.editor.container.style.height = StringUtil.asPixels(height);
    }

    setLine(line: number) {
        if (this.editor)
            this.editor.moveCursorTo(line - 1, 0);
    }

    setRange(startRow: number, startCol: number, endRow: number, endCol: number) {
        if (this.editor)
            this.editor.selection.setRange(new this.ace.Range(startRow, startCol, endRow, endCol));
    }

}

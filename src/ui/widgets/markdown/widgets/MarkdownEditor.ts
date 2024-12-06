import { EditorConstants } from "../../../../constants";
import { QxComposite } from "../../../../qx/ui/mobile/container/QxComposite";

export class MarkdownEditor extends QxComposite {
    ace: any;
    editor: any = undefined;
    initValue: string = '';

    constructor() {
        super();
        this.ace = (window as any).ace;
    }

    clear() {
        this.setValue('');
    }

    getValue(): string {
        if (this.editor)
            return this.editor.getValue();
        return this.initValue;
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        const cfg: any = { mode: EditorConstants.ModeMarkdown };
        this.editor = this.ace.edit(this.getContentElement(), cfg);
        this.setValue(this.initValue);
    }

    resize() {
        if (this.editor)
            setTimeout(() => {
                this.editor.resize()
                this.setLine(0);
            }, EditorConstants.ResizeDelay);
    }

    setLine(line: number) {
        if (this.editor)
            this.editor.moveCursorTo(line - 1, 0);
    }

    setValue(value: string) {
        if (this.editor) {
            this.editor.setValue(value);
            this.resize();
        }
        else
            this.initValue = value;
    }

}

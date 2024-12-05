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
        console.log('MarkdownEditor onAppear');
        (window as any).X = this;
    }

    setValue(value: string) {
        if (this.editor)
            this.editor.setValue(value);
        else
            this.initValue = value;
    }

}

import { EditorConstants } from "../../../../constants";
import { QxComposite } from "../../../../qx/ui/mobile/container/QxComposite";

export class MarkdownEditor extends QxComposite {
    ace: any;
    editor: any = undefined;

    constructor() {
        super();
        this.ace = (window as any).ace;
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        const cfg: any = { mode: EditorConstants.ModePython };
        // this.editor = this.ace.edit(this.getContentElement(), cfg);
        console.log('MarkdownEditor onAppear');
    }

}

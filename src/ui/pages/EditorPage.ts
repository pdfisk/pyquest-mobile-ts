import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class EditorPage extends AbstractPage {
    editor: any;
    initValue: string = '';
    static instance: EditorPage;

    static getInstance(): EditorPage {
        if (!this.instance)
            this.instance = new EditorPage();
        return this.instance;
    }

    static setCode(code: string) {
        this.getInstance().setCode(code);
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageEditor);
    }

    onAppear() {
        super.onAppear();
        const cfg: any = { mode: 'ace/mode/python' };
        const content = this.widget.getContent();
        content._setStyle('height', '100%');
        const ace = (window as any).ace;
        this.editor = ace.edit(content.getContentElement(), cfg);
        this.setCode(this.initValue);
        (window as any).X = this;
    }

    setCode(code: string) {
        if (this.editor)
            this.editor.setValue(code);
        else
            this.initValue = code;
    }

}

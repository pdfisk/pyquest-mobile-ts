import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class EditorPage extends AbstractPage {
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

    setCode(code: string) {
        console.log('setCode', code.length);
    }

}

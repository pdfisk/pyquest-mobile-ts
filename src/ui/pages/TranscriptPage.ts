import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { QxTextArea } from "../../qx/mobile/form/QxTextArea";
import { AbstractPage } from "./AbstractPage";

export class TranscriptPage extends AbstractPage {
    textArea: QxTextArea;
    static instance: TranscriptPage;

    static getInstance(): TranscriptPage {
        if (!this.instance)
            this.instance = new TranscriptPage();
        return this.instance;
    }

    static clear() {
        this.getInstance().clear();
    }

    static getValue(): string {
        return this.getInstance().getValue();
    }

    static prn(text: string) {
        this.getInstance().prn(text);
    }

    static setValue(text: string) {
        this.getInstance().setValue(text);
    }

    private constructor() {
        super();
        this.textArea = new QxTextArea;
        this.setTitle(LabelConstants.PageTranscript);
    }

    addContent() {
        this.addContentWidget(this.textArea);
    }

    clear() {
        this.textArea.clear();
    }

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelClear];
    }

    getValue(): string {
        return this.textArea.getValue();
    }

    onClear() {
        this.clear();
    }

    prn(text: string) {
        this.setValue(`${this.getValue()}${text.trimEnd()}\n`);
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            default:
                console.log('TranscriptPage onTap', action);
                break;
        }
    }

    setValue(text: string) {
        this.textArea.setValue(text);
    }

}

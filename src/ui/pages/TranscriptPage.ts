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
        this.setValue('');
    }

    getValue(): string {
        return this.textArea.getValue();
    }

    prn(text: string) {
        this.setValue(`${this.getValue()}${text.trimEnd()}\n`);
    }

    setValue(text: string) {
        this.textArea.setValue(text);
    }

}

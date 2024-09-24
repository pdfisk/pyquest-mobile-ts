import { ActionConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractTextPage } from "./AbstractTextPage";

export class TranscriptPage extends AbstractTextPage {
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
        this.setTitle(LabelConstants.PageTranscript);
    }

    defaultButtons(): string[] {
        return [LabelConstants.ButtonLabelClear];
    }

    onClear() {
        this.clear();
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

}

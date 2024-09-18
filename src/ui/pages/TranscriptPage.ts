import { LabelConstants } from "../../constants/LabelConstants";
import { AbstractPage } from "./AbstractPage";

export class TranscriptPage extends AbstractPage {
    static instance: TranscriptPage;

    static getInstance(): TranscriptPage {
        if (!this.instance)
            this.instance = new TranscriptPage();
        return this.instance;
    }

    private constructor() {
        super();
        this.setTitle(LabelConstants.PageTranscript);
    }

}

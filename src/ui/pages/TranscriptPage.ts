import { ActionConstants, EventConstants } from "../../constants";
import { LabelConstants } from "../../constants/LabelConstants";
import { MessageBus } from "../../messages";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { AbstractTextPage } from "./abstract/AbstractTextPage";

export class TranscriptPage extends AbstractTextPage {
    stopButton: QxButton | null = null;
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
        MessageBus.subscribe(EventConstants.TranscriptClear, this.clear, this);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelClear,
            LabelConstants.ButtonLabelDetails,
            LabelConstants.ButtonLabelStop
        ];
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.stopButton = this.buttonbar.getButtonFromLabel(LabelConstants.ButtonLabelStop);
    }

    onClear() {
        this.clear();
    }

    onDetails() {
        this.showDetails();
    }

    onStop() {
        console.log('TranscriptPage onStop');
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionDetails:
                this.onDetails();
                break;
            case ActionConstants.ActionStop:
                this.onStop();
                break;
            default:
                console.log('TranscriptPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

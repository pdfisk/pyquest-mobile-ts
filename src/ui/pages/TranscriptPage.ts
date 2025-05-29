import {ActionConstants} from '../../constants/ActionConstants';
import {EventConstants} from '../../constants/EventConstants';
import {LabelConstants} from "../../constants/LabelConstants";
import {MessageBus} from '../../messages/MessageBus';
import {QxButton} from "../../qx/ui/mobile/form/QxButton";
import {DebugUtil} from '../../util/DebugUtil';
import {AbstractTextPage} from "./abstract/AbstractTextPage";
import {IStdOut} from "../../interfaces/IStdOut";
import {VmApi} from "../../api/VmApi";

export class TranscriptPage extends AbstractTextPage implements IStdOut {
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

    getId(): number {
        return 0;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
        this.stopButton = this.buttonbar.getButtonFromLabel(LabelConstants.ButtonLabelStop);
        const fn = (text: string): void => {
            this.prn(text);
        }
        VmApi.setStdOut(fn);
    }

    onClear() {
        this.clear();
    }

    onDetails() {
        this.showDetails();
    }

    onStop() {
        DebugUtil.log('TranscriptPage onStop');
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
                DebugUtil.log('TranscriptPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

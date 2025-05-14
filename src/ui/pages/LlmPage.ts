import { ActionConstants } from '../../constants/ActionConstants';
import { LabelConstants } from "../../constants/LabelConstants";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { IStdOut } from '../../vm/core/interfaces/IStdOut';
import { GeminiServer } from '../../vm/server/GeminiServer';
import { DebugUtil } from '../../vm/util/DebugUtil';
import { TranscriptPage } from '../pages/TranscriptPage';
import { AbstractTextPage } from "./abstract/AbstractTextPage";

export class LlmPage extends AbstractTextPage implements IStdOut {
    stopButton: QxButton | null = null;
    static instance: LlmPage;

    static getInstance(): LlmPage {
        if (!this.instance)
            this.instance = new LlmPage();
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
        this.setTitle(LabelConstants.PageLlm);
    }

    defaultButtons(): string[] {
        return [
            LabelConstants.ButtonLabelSend,
            LabelConstants.ButtonLabelClear
        ];
    }

    getId(): number {
        return 0;
    }

    onAppear() {
        if (this.hasAppeared)
            return;
        super.onAppear();
    }

    onClear() {
        this.clear();
    }

    onSend() {
        const text = this.getValue();
        const fn = (text: string) => {
            TranscriptPage.prn(text);
            this.showTranscript();
        };
        GeminiServer.chat(text, fn);
    }

    onTap(action: string) {
        switch (action) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionSend:
                this.onSend();
                break;
            default:
                DebugUtil.log('LlmPage onTap', action);
                break;
        }
    }

    setAdjustedWidthAndHeight(adjustedWidth: number, adjustedHeight: number): void {
    }

}

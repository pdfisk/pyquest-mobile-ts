import { VmApi } from '../../../api';
import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { Version } from '../../../constants/Version';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
import { TranscriptPanel } from '../../widgets/TranscriptPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class TranscriptWindow extends AbstractWindow {

    transcriptPanel?: TranscriptPanel;

    static getInstance(): TranscriptWindow {
        if (!this.instance)
            this.instance = new TranscriptWindow;
        return this.instance;
    }

    static pr(text: string) {
        this.getInstance().pr(text);
    }

    static instance: TranscriptWindow;

    private constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.transcriptPanel = new TranscriptPanel;
        this.add(this.transcriptPanel);
    }

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelClear);
        this.addButtonLeft(LabelConstants.ButtonLabelStatus);
    }

    defaultAutoDestroy(): boolean {
        return false;
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelTranscript;
    }

    defaultInitialPosition(): number[] {
        return [15, 45];
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case ActionConstants.ActionClear:
                this.onClear();
                break;
            case ActionConstants.ActionStatus:
                this.onStatus();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.TranscriptWindowOnButtonClick, tag);
                break;
        }
    }

    onClear() {
        this.transcriptPanel?.clear();
    }

    onStatus() {
        const str1 = `       Version: ${Version.version}`;
        const str2 = `Client Updated: ${Version.timestamp}`;
        const str3 = `    Vm Updated: ${VmApi.getInstance().getVmApiGetTimestamp()}`;
        const str = `${str1}\n${str2}\n${str3}\n`;
        this.transcriptPanel?.setValue(str);
    }

    pr(text: string) {
        this.transcriptPanel?.pr(text);
    }

}

import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { Version } from '../../../constants/Version';
import { ErrorManager } from '../../../errors/ErrorManager';
import { TextPanel } from '../../widgets/TextPanel';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class TranscriptWindow extends AbstractWindow {

    textPanel?: TextPanel;

    static getInstance(): TranscriptWindow {
        if (!this.instance)
            this.instance = new TranscriptWindow();
        return this.instance;
    }

    static instance: TranscriptWindow;

    private constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.textPanel = new TextPanel();
        this.add(this.textPanel);
    }

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelClear);
        this.addButtonLeft(LabelConstants.ButtonLabelStatus);
    }

    defaultAutoDestroy():boolean {
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
                ErrorManager.logError(ErrorConstants.TranscriptWindowOnButtonClick, tag);
                break;
        }
    }

    onClear() {
        this.textPanel?.clear();
    }

    onStatus() {
        const str1 = `  Version: ${Version.version}`;
        const str2 = `Timestamp: ${Version.timestamp}`;
        const str = `${str1}\n${str2}`;
        this.textPanel?.setValue(str);
    }

}

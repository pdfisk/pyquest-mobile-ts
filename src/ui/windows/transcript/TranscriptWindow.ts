import { Version } from '../../../constants/Version';
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
        this.addButtonLeft('Clear');
        this.addButtonLeft('Status');
    }

    defaultCaption(): string {
        return 'Transcript';
    }

    defaultInitialPosition(): number[] {
        return [15, 45];
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case 'clear':
                this.onClear();
                break;
            case 'status':
                this.onStatus();
                break;
            default:
                console.log('onButtonClick', tag);
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

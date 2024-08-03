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
            default:
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClear() {
        this.textPanel?.clear();
    }

}

import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class TranscriptWindow extends AbstractWindow {

    textArea?: QxTextArea;

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
        this.textArea = new QxTextArea();
        this.add(this.textArea);
    }

    defaultCaption(): string {
        return 'Transcript';
    }

}

import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';

export class TranscriptWindow extends QxWindowWindow {

    textArea?: QxTextArea;

    static getInstance(): TranscriptWindow {
        if (!this.instance)
            this.instance = new TranscriptWindow();
        return this.instance;
    }

    static instance: TranscriptWindow;

    constructor() {
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

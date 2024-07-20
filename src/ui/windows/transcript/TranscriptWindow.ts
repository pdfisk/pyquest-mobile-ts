import { QxWindowWindow } from '../../../qx/ui/window/QxWindowWindow';

export class TranscriptWindow extends QxWindowWindow {

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
    }

    defaultCaption(): string {
        return 'Transcript';
    }

}

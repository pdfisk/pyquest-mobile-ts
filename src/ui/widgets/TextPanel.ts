import { QxTextArea } from '../../qx/ui/form/QxTextArea';
import { Panel } from './Panel';

export class TextPanel extends Panel {
    textArea: QxTextArea;

    constructor() {
        super();
        this.textArea = new QxTextArea();
        this.addCenter(this.textArea);
    }

    clear() {
        this.textArea.clear();
    }

    getValue(): string {
        return this.textArea.getValue();
    }

    setValue(text: string) {
        this.textArea.setValue(text);
    }

}

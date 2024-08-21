import { QxTextArea } from '../../qx/ui/form/QxTextArea';
import { AbstractPanel } from './AbstractPanel';

export class TextPanel extends AbstractPanel {
    textArea: QxTextArea;

    constructor() {
        super();
        this.textArea = new QxTextArea;
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

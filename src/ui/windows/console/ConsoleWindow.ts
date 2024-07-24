import { QxTextArea } from '../../../qx/ui/form/QxTextArea';
import { QxSplitPane } from '../../../qx/ui/splitpane/QxSplitPane';
import { AbstractWindow } from '../abstract/AbstractWindow';

export class ConsoleWindow extends AbstractWindow {

    cin?: QxTextArea;
    cout?: QxTextArea;
    splitPane?: QxSplitPane;

    initialize() {
        super.initialize();
        this.cin = new QxTextArea();
        this.cout = new QxTextArea();
        this.splitPane = QxSplitPane.createHorizontal();
        this.splitPane.add(this.cin, 1);
        this.splitPane.add(this.cout, 1);
        this.add(this.splitPane);
    }

    addButtons() {
        this.addButton('Run');
        this.addButton('Clear Out');
        this.addButton('Clear In');
    }

    defaultCaption(): string {
        return 'Console';
    }

    getCin(): string {
        if (this.cin)
            return this.cin.getValue();
        return '';
    }

    getCout(): string {
        if (this.cout)
            return this.cout.getValue();
        return '';
    }

    onButtonClick(tag: string) {
        switch (tag) {
            case 'clear_in':
                this.onClearIn();
                break;
            case 'clear_out':
                this.onClearOut();
                break;
            case 'run':
                this.onRun();
                break;
            default:
                console.log('onButtonClick', tag);
                break;
        }
    }

    onClearIn() {
        this.cin?.clear();
    }

    onClearOut() {
        this.cout?.clear();
    }

    onRun() {
        const text: any = this.cin?.getValue();
        if (typeof (text) !== 'string')
            return;
        this.setCout(text);
    }

    setCin(text: string) {
        if (this.cin)
            this.cin.setValue(text);
    }

    setCout(text: string) {
        if (this.cout)
            this.cout.setValue(text);
    }

}

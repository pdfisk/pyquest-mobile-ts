import { ActionConstants } from '../../../constants/ActionConstants';
import { ErrorConstants } from '../../../constants/ErrorConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { ErrorHandler } from '../../../handlers/ErrorHandler';
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

    addButtonsLeft() {
        this.addButtonLeft(LabelConstants.ButtonLabelRun);
        this.addButtonLeft(LabelConstants.ButtonLabelClearOut);
        this.addButtonLeft(LabelConstants.ButtonLabelClearIn);
    }

    defaultCaption(): string {
        return LabelConstants.WindowLabelConsole;
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
            case ActionConstants.ActionClearIn:
                this.onClearIn();
                break;
            case ActionConstants.ActionClearOut:
                this.onClearOut();
                break;
            case ActionConstants.ActionRun:
                this.onRun();
                break;
            default:
                ErrorHandler.logError(ErrorConstants.ConsoleWindowOnButtonClick, tag);
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

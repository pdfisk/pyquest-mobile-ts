import { QxTextArea } from "../../qx/mobile/form/QxTextArea";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractTextPage extends AbstractPage {
    textArea: QxTextArea;

    protected constructor() {
        super();
        this.textArea = new QxTextArea;
    }

    addContent() {
        this.addContentWidget(this.textArea);
    }

    clear() {
        this.textArea.clear();
    }

    getValue(): string {
        return this.textArea.getValue();
    }

    prn(text: string) {
        this.setValue(`${this.getValue()}${text.trimEnd()}\n`);
    }

    setValue(text: string) {
        this.textArea.setValue(text);
    }

}

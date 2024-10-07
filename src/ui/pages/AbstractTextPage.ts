import { QxTextArea } from "../../qx/mobile/form/QxTextArea";
import { StringUtil } from "../../util/StringUtil";
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

    private append(text: string) {
        this.setValue(`${this.getValue()}${text}`);
    }

    clear(): AbstractTextPage {
        this.textArea?.clear();
        return this;
    }

    getValue(): string {
        if (this.textArea)
            return this.textArea.getValue();
        return '';
    }

    isContentReady(): boolean {
        return this.textArea instanceof QxTextArea;
    }

    newline(): AbstractTextPage {
        this.append("\n");
        return this;
    }

    pr(text: string): AbstractTextPage {
        this.append(text.trimEnd());
        return this;
    }

    prn(text: string): AbstractTextPage {
        this.pr(text);
        this.newline();
        return this;
    }

    resizeWidthAndHeight(adjustedWidth: number, adjustedHeight: number) {
        this.setTextAreaHeight(adjustedHeight);
    }

    setAdjustedHeight(adjustedHeight: number): void {
        console.log('AbstractTextPage setAdjustedHeight', adjustedHeight);
        this.setTextAreaHeight(adjustedHeight);
    }

    setAdjustedWidth(adjustedWidth: number): void {
    }

    setTextAreaHeight(height: number) {
        console.log('setTextAreaHeight', height);
        (window as any).X = this;
        this.textArea?.setHeightPx(height);
    }

    setValue(text: string): AbstractTextPage {
        this.textArea?.setValue(text);
        return this;
    }

    space(count: number = 1): AbstractTextPage {
        this.pr(StringUtil.spaces(count));
        return this;
    }

}

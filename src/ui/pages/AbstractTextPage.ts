import { SizeConstants } from "../../constants";
import { QxTextArea } from "../../qx/mobile/form/QxTextArea";
import { StringUtil } from "../../util/StringUtil";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractTextPage extends AbstractPage {
    textArea?: QxTextArea = undefined;

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
        return this.textArea !== undefined;
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

    resizeHeight(height: number) {
        if (this.textArea)
            this.setTextAreaHeight(height);
        else
            this.deferredHeight = height;
    }

    setAdjustedHeight(adjustedHeight: number): void {
        this.setTextAreaHeight(adjustedHeight);
    }

    setTextAreaHeight(height: number) {
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

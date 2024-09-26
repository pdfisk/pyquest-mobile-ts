import { SizeConstants } from "../../constants";
import { QxTextArea } from "../../qx/mobile/form/QxTextArea";
import { StringUtil } from "../../util/StringUtil";
import { AbstractPage } from "./AbstractPage";

export abstract class AbstractTextPage extends AbstractPage {
    deferredHeight: number = 0;
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
        this.textArea.clear();
        return this;
    }

    getValue(): string {
        return this.textArea.getValue();
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

    setTextAreaHeight(height: number) {
        this.textArea.setHeightPx(height - SizeConstants.ButtonBarButtonHeight);
    }

    setValue(text: string): AbstractTextPage {
        this.textArea.setValue(text);
        return this;
    }

    space(count: number = 1): AbstractTextPage {
        this.pr(StringUtil.spaces(count));
        return this;
    }

}

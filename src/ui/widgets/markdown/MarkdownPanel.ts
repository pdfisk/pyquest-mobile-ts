import { QxCard } from "../../../qx/ui/mobile/container/QxCard";
import { MarkdownUtil } from "../../../util/MarkdownUtil";
import { MarkdownEditor } from "./widgets/MarkdownEditor";
import { MarkdownView } from "./widgets/MarkdownView";

export class MarkdownPanel extends QxCard {
    editorPanel: MarkdownEditor;
    viewPanel: MarkdownView;

    constructor() {
        super();
        this.editorPanel = new MarkdownEditor;
        this.viewPanel = new MarkdownView;
        this.add(this.editorPanel);
        this.add(this.viewPanel);
        this.showEditor();
    }

    clear() {
        this.editorPanel.clear();
    }

    getValue(): string {
        return this.editorPanel.getValue();
    }

    setValue(value: string) {
        this.editorPanel.setValue(value);
    }

    showEditor() {
        this.editorPanel.show();
    }

    showHtml() {
        this.viewPanel.setHtml(MarkdownUtil.convertMarkdown(this.getValue()));
        this.viewPanel.show();
    }

}

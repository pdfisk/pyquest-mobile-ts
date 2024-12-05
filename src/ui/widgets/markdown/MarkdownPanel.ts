import { QxCard } from "../../../qx/ui/mobile/container/QxCard";
import { MarkdownEditor } from "./widgets/MarkdownEditor";

export class MarkdownPanel extends QxCard {
    editorPanel: MarkdownEditor;

    constructor() {
        super();
        this.editorPanel = new MarkdownEditor;
        this.add(this.editorPanel);
    }

}

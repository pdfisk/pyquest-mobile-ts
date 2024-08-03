import { QxEditor } from '../../qx/ui/editor/QxEditor';
import { AbstractPanel } from './AbstractPanel';

export class EditorPanel extends AbstractPanel {
    editor: QxEditor;

    constructor() {
        super();
        this.editor = new QxEditor();
        this.addCenter(this.editor);
    }

    clear() {
        this.editor.clear();
    }

    getValue(): string {
        return this.editor.getValue();
    }

    setValue(text: string) {
        this.editor.setValue(text);
    }

}

import { QxEditor } from '../../qx/ui/editor/QxEditor';
import { Panel } from './Panel';

export class EditorPanel extends Panel {
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
        console.log('SET VALUE', text);
        this.editor.setValue(text);
    }

}

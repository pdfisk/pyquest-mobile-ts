import { QxElement } from '../../html/QxElement';
import { QxComposite } from '../container/QxComposite';

export class QxEditor extends QxComposite {
    editor: any = null;
    initValue: string = '';

    clear() {
        this.setValue('');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getValue(): string {
        if (this.editor)
            return this.editor.getValue();
        return '';
    }

    onAppear() {
        const elem: QxElement = this.getContentElement();
        const domNode = elem.widget._domNode;
        const mode = (window as any).qx.lang.String.format('ace/mode/%1', ['python']);
        const config = { mode: mode, };
        const ace: any = (window as any).ace;
        this.editor = ace.edit(domNode, config);
        this.editor.setTheme('ace/theme/dreamweaver');
        this.editor.setValue(this.initValue);
        this.initValue = '';
    }

    setRange() {
        this.editor.selection.setRange(new (window as any).ace.Range(0, 0, 0, 0));
    }

    setValue(text: string) {
        if (!this.editor) {
            this.initValue = text;
            return;
        }
        this.editor.setValue(text);
        this.setRange()
    }

}

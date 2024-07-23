import { QxElement } from '../../html/QxElement';
import { QxComposite } from '../container/QxComposite';

export class QxEditor extends QxComposite {
    editor: any = null;
    initValue:string ='';

    clear() {
        console.log('QxEditor clear');
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getValue(): string {
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

    setValue(text: string) {
        if (!this.editor){
            this.initValue = text;
            return;
        }
        this.editor.setValue(text);
        console.log('SET VALUE');
        (window as any).X = [this, text];
    }

}

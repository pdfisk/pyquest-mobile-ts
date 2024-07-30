import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { EditorPanel } from '../../../widgets/EditorPanel';

export class ProjectTabView extends QxTabView {
    editorPanel: EditorPanel;

    constructor() {
        super();
        this.editorPanel = new EditorPanel;
        this.addPage('Code', this.editorPanel);
    }

    addPage(label: string, widget: QxWidget): QxWidget {
        const page = new QxTabPage(label);
        page.addCenter(this.editorPanel);
        this.add(page);
        return page;
    }

    clearCode() {
        this.editorPanel.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getCode(): string {
        return this.editorPanel.getValue();
    }

    onAppear() {
        this.editorPanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }

    setCode(code: string) {
        this.editorPanel.setValue(code);
    }

}

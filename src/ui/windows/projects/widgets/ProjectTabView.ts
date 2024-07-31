import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { EditorPanel } from '../../../widgets/EditorPanel';
import { HtmlPanel } from '../../../widgets/HtmlPanel';

export class ProjectTabView extends QxTabView {
    codePanel: EditorPanel;
    descriptionPanel: HtmlPanel;

    constructor() {
        super();
        this.codePanel = new EditorPanel;
        this.descriptionPanel = new HtmlPanel;
        this.addPage('Code', this.codePanel);
        this.addPage('Description', this.descriptionPanel);
    }

    addPage(label: string, widget: QxWidget): QxWidget {
        const page = new QxTabPage(label);
        page.addCenter(widget);
        this.add(page);
        return page;
    }

    clearCode() {
        this.codePanel.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getCode(): string {
        return this.codePanel.getValue();
    }

    onAppear() {
        this.codePanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }

    setCode(code: string) {
        this.codePanel.setValue(code);
    }

}

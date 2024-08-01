import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { EditorPanel } from '../../../widgets/EditorPanel';
import { TextPanel } from '../../../widgets/TextPanel';
import { DetailsPanel } from './DetailsPanel';

export class ProjectTabView extends QxTabView {
    codePanel: EditorPanel;
    descriptionPanel: TextPanel;
    detailsPanel: DetailsPanel;

    constructor() {
        super();
        this.codePanel = new EditorPanel;
        this.descriptionPanel = new TextPanel;
        this.detailsPanel = new DetailsPanel;
        this.addPage('Code', this.codePanel);
        this.addPage('Description', this.descriptionPanel);
        this.addPage('Details', this.detailsPanel);
    }

    addPage(label: string, widget: QxWidget): QxWidget {
        const page = new QxTabPage(label);
        page.addCenter(widget);
        this.add(page);
        return page;
    }

    clear() {
        this.clearCode();
        this.clearDescription();
    }

    clearCode() {
        this.codePanel.clear();
    }

    clearDescription() {
        this.descriptionPanel.clear();
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    getCode(): string {
        return this.codePanel.getValue();
    }

    getDescription(): string {
        return this.descriptionPanel.getValue();
    }

    onAppear() {
        this.codePanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }

    setCode(code: string) {
        this.codePanel.setValue(code);
    }

    setDescription(text: string) {
        this.descriptionPanel.setValue(text);
    }

}

import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { EditorPanel } from '../../../widgets/EditorPanel';
import { TextPanel } from '../../../widgets/TextPanel';
import { TranscriptPanel } from '../../../widgets/TranscriptPanel';
import { DetailsPanel } from './DetailsPanel';

export class ProjectTabView extends QxTabView {
    codePanel: EditorPanel;
    descriptionPanel: TextPanel;
    detailsPanel: DetailsPanel;
    transcriptPanel: TranscriptPanel;

    constructor() {
        super();
        this.codePanel = new EditorPanel;
        this.descriptionPanel = new TextPanel;
        this.detailsPanel = new DetailsPanel;
        this.transcriptPanel = new TranscriptPanel;
        this.addPage('Code', this.codePanel);
        this.addPage('Description', this.descriptionPanel);
        this.addPage('Details', this.detailsPanel);
        this.addPage('Transcript', this.transcriptPanel);
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
        this.clearDetails();
        this.setSelection(this.codePanel);
    }

    clearCode() {
        this.codePanel.clear();
    }

    clearDescription() {
        this.descriptionPanel.clear();
    }

    clearDetails() {
        this.detailsPanel.clear();
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

    getDetails(): string {
        return this.detailsPanel.getValue();
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

    setDetails(text: string) {
        this.detailsPanel.setValue(text);
    }

    setSelection(child: QxWidget) {
        this.widget.setSelection([child.widget.getLayoutParent()]);
    }

}

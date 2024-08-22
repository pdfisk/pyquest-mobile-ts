import { LabelConstants } from '../../../../constants/LabelConstants';
import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { BoardPanel } from '../../../widgets/BoardPanel';
import { EditorPanel } from '../../../widgets/EditorPanel';
import { TextPanel } from '../../../widgets/TextPanel';
import { TranscriptPanel } from '../../../widgets/TranscriptPanel';
import { DetailsPanel } from './DetailsPanel';

export class ProjectTabView extends QxTabView {
    boardPanel: BoardPanel;
    codePanel: EditorPanel;
    descriptionPanel: TextPanel;
    detailsPanel: DetailsPanel;
    transcriptPanel: TranscriptPanel;

    constructor() {
        super();
        this.boardPanel = new BoardPanel;
        this.codePanel = new EditorPanel;
        this.descriptionPanel = new TextPanel;
        this.detailsPanel = new DetailsPanel;
        this.transcriptPanel = new TranscriptPanel;
        this.addPage(LabelConstants.TabPageCode, this.codePanel);
        this.addPage(LabelConstants.TabPageDescription, this.descriptionPanel);
        this.addPage(LabelConstants.TabPageDetails, this.detailsPanel);
        this.addPage(LabelConstants.TabPageTranscript, this.transcriptPanel);
        this.addPage(LabelConstants.TabPageBoard, this.boardPanel);
    }

    addPage(label: string, widget: QxWidget): QxWidget {
        const page = new QxTabPage(label);
        page.addCenter(widget);
        this.add(page);
        return page;
    }

    clear() {
        this.clearBoard();
        this.clearCode();
        this.clearDescription();
        this.clearDetails();
        this.setSelection(this.codePanel);
    }

    clearBoard() {
        this.boardPanel.clear();
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

    defaultEnableOnResize(): boolean {
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

    getTranscriptPanel():TranscriptPanel {
        return this.transcriptPanel;
    }

    onAppear() {
        super.onAppear();
        this.codePanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }

    onResize() {
        super.onResize();
        this.boardPanel.centerLabels();
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

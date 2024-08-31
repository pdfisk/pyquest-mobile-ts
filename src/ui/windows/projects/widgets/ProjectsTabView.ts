import { ActionConstants } from '../../../../constants/ActionConstants';
import { ErrorConstants } from '../../../../constants/ErrorConstants';
import { LabelConstants } from '../../../../constants/LabelConstants';
import { ErrorHandler } from '../../../../handlers/ErrorHandler';
import { QxWidget } from '../../../../qx/ui/core/QxWidget';
import { QxTabPage } from '../../../../qx/ui/tabview/QxTabPage';
import { QxTabView } from '../../../../qx/ui/tabview/QxTabView';
import { BoardPanel } from '../../../widgets/BoardPanel';
import { EditorPanel } from '../../../widgets/EditorPanel';
import { TextPanel } from '../../../widgets/TextPanel';
import { TranscriptPanel } from '../../../widgets/TranscriptPanel';
import { ProjectsDetailsPanel } from './ProjectsDetailsPanel';

export class ProjectsTabView extends QxTabView {
    boardPanel: BoardPanel;
    boardPage: QxTabPage;
    codePage: QxTabPage;
    descriptionPanel: TextPanel;
    descriptionPage: QxTabPage;
    detailsPanel: ProjectsDetailsPanel;
    detailsPage: QxTabPage;
    editorPanel: EditorPanel;
    transcriptPanel: TranscriptPanel;
    transcriptPage: QxTabPage;

    constructor() {
        super();
        this.boardPanel = new BoardPanel;
        this.descriptionPanel = new TextPanel;
        this.detailsPanel = new ProjectsDetailsPanel;
        this.editorPanel = new EditorPanel;
        this.transcriptPanel = new TranscriptPanel;
        this.codePage = this.addPage(LabelConstants.TabPageCode, this.editorPanel);
        this.descriptionPage = this.addPage(LabelConstants.TabPageDescription, this.descriptionPanel);
        this.detailsPage = this.addPage(LabelConstants.TabPageDetails, this.detailsPanel);
        this.transcriptPage = this.addPage(LabelConstants.TabPageTranscript, this.transcriptPanel);
        this.boardPage = this.addPage(LabelConstants.TabPageBoard, this.boardPanel);
    }

    addPage(label: string, widget: QxWidget): QxTabPage {
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
        this.setSelection(this.codePage);
    }

    clearBoard() {
        this.boardPanel.clear();
    }

    clearCode() {
        this.editorPanel.clear();
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

    getBoardPanel(): BoardPanel {
        return this.boardPanel;
    }

    getCode(): string {
        return this.editorPanel.getValue();
    }

    getDescription(): string {
        return this.descriptionPanel.getValue();
    }

    getDetails(): string {
        return this.detailsPanel.getValue();
    }

    getEditorPanel(): EditorPanel {
        return this.editorPanel;
    }

    getTranscriptPanel(): TranscriptPanel {
        return this.transcriptPanel;
    }

    onAppear() {
        super.onAppear();
        this.editorPanel.widget.getLayoutParent().getLayoutParent().setPadding(0);
    }

    onResize() {
        super.onResize();
        this.boardPanel.setMaxSizes();
    }

    setActiveTab(tab: string) {
        switch (tab) {
            case ActionConstants.TabTranscript:
                this.setSelection(this.transcriptPage);
                break;
            case ActionConstants.TabBoard:
                this.setSelection(this.boardPage);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.ProjectsTabsUnknownTab, tab);
                break;
        }
    }

    setCode(code: string) {
        this.editorPanel.setValue(code);
    }

    setDescription(text: string) {
        this.descriptionPanel.setValue(text);
    }

    setDetails(text: string) {
        this.detailsPanel.setValue(text);
    }

}

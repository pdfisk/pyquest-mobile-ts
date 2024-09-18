import { QxMobileApplication } from '../../qx/application/QxMobileApplication';
import { QxMobileRouting } from '../../qx/application/QxMobileRouting';
import { QxMobileComposite } from '../../qx/mobile/container/QxMobileComposite';
import { QxMobileRoot } from '../../qx/mobile/core/QxMobileRoot';
import { QxPageManager } from '../../qx/mobile/page/QxPageManager';
import { BoardPage } from '../pages/BoardPage';
import { EditorPage } from '../pages/EditorPage';
import { HomePage } from '../pages/HomePage';
import { OverviewPage } from '../pages/OverviewPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { TranscriptPage } from '../pages/TranscriptPage';

export class Viewport extends QxMobileComposite {
    application: QxMobileApplication;
    manager: QxPageManager;
    pageBoard: BoardPage;
    pageEditor: EditorPage;
    pageHome: HomePage;
    pageOverview: OverviewPage;
    pageProjects: ProjectsPage;
    pageTranscript: TranscriptPage;
    root: QxMobileRoot;
    routing: QxMobileRouting;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    constructor() {
        super();
        this.application = QxMobileApplication.getInstance();
        this.manager = QxPageManager.getInstance();
        this.root = QxMobileRoot.getInstance();
        this.routing = QxMobileRouting.getInstance();
        this.pageBoard = BoardPage.getInstance();
        this.pageEditor = EditorPage.getInstance();
        this.pageHome = HomePage.getInstance();
        this.pageOverview = OverviewPage.getInstance();
        this.pageProjects = ProjectsPage.getInstance();
        this.pageTranscript = TranscriptPage.getInstance();
        this.addDetailPages();
        this.buildRouting();
    }

    buildRouting() {
        (window as any).X = [
            this.routing.widget,
            this.pageHome.widget,
            this.pageBoard.widget,
            this.pageEditor.widget,
            this.pageProjects.widget,
            this.pageTranscript.widget
        ];
        console.log('buildRouting');
        // this.routing.onGet('/', this.pageHome);
        // this.routing.onGet('/board', this.pageBoard);
        // this.routing.onGet('/editor', this.pageEditor);
        // this.routing.onGet('/projects', this.pageProjects);
        // this.routing.onGet('/transcript', this.pageTranscript);
        // this.routing.init();
    }

    addDetailPages() {
        this.manager.addDetailPages([
            this.pageBoard, this.pageEditor, this.pageHome, this.pageProjects, this.pageTranscript
        ]);
    }

    initialize() {
        super.initialize();
        console.log('OK');
    }

}

import { PageConstants } from '../../constants/PageConstants';
import { QxMobileApplication } from '../../qx/application/QxMobileApplication';
import { QxMobileRouting } from '../../qx/application/QxMobileRouting';
import { QxComposite } from '../../qx/ui/mobile/container/QxComposite';
import { QxRoot } from '../../qx/ui/mobile/core/QxRoot';
import { QxPageManager } from '../../qx/ui/mobile/page/QxPageManager';
import { BoardPage } from '../pages/BoardPage';
import { EditorPage } from '../pages/EditorPage';
import { HomePage } from '../pages/HomePage';
import { TopMenuPage } from '../pages/TopMenuPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { StatusPage } from '../pages/StatusPage';
import { TranscriptPage } from '../pages/TranscriptPage';

export class Viewport extends QxComposite {
    application: QxMobileApplication;
    manager: QxPageManager;
    pageBoard: BoardPage;
    pageEditor: EditorPage;
    pageHome: HomePage;
    pageOverview: TopMenuPage;
    pageProjects: ProjectsPage;
    pageStatus: StatusPage;
    pageTranscript: TranscriptPage;
    root: QxRoot;
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
        this.root = QxRoot.getInstance();
        this.routing = QxMobileRouting.getInstance();
        this.pageBoard = BoardPage.getInstance();
        this.pageEditor = EditorPage.getInstance();
        this.pageHome = HomePage.getInstance();
        this.pageOverview = TopMenuPage.getInstance();
        this.pageProjects = ProjectsPage.getInstance();
        this.pageStatus = StatusPage.getInstance();
        this.pageTranscript = TranscriptPage.getInstance();
        this.addMasterPage();
        this.addDetailPages();
        this.buildRouting();
    }

    addDetailPages() {
        this.manager.addDetailPages([
            this.pageBoard, this.pageEditor, this.pageHome,
            this.pageProjects, this.pageStatus, this.pageTranscript
        ]);
    }

    addMasterPage() {
        this.manager.addMaster(this.pageOverview);
    }

    buildRouting() {
        this.routing.onGet(PageConstants.routeBoard, this.pageBoard);
        this.routing.onGet(PageConstants.routeEditor, this.pageEditor);
        this.routing.onGet(PageConstants.routeHome, this.pageHome);
        this.routing.onGet(PageConstants.routeProjects, this.pageProjects);
        this.routing.onGet(PageConstants.routeStatus, this.pageStatus);
        this.routing.onGet(PageConstants.routeTopMenu, this.pageOverview);
        this.routing.onGet(PageConstants.routeTranscript, this.pageTranscript);
        this.routing.init();
    }

    handlesOnAppear(): boolean {
        return true;
    }

    initialize() {
        super.initialize();
    }

    onAppear() {
        QxMobileApplication.executeGet(PageConstants.routeHome);
    }

}

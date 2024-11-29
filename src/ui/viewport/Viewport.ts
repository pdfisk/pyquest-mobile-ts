import { PageConstants } from '../../constants/PageConstants';
import { QxMobileApplication } from '../../qx/application/QxMobileApplication';
import { QxMobileRouting } from '../../qx/application/QxMobileRouting';
import { QxComposite } from '../../qx/ui/mobile/container/QxComposite';
import { QxRoot } from '../../qx/ui/mobile/core/QxRoot';
import { QxTooltip } from '../../qx/ui/mobile/dialog/QxTooltip';
import { QxPageManager } from '../../qx/ui/mobile/page/QxPageManager';
import { BoardPage } from '../pages/BoardPage';
import { DeletePage } from '../pages/DeletePage';
import { DetailsPage } from '../pages/DetailsPage';
import { EditorPage } from '../pages/EditorPage';
import { LoginPage } from '../pages/LoginPage';
import { NewPage } from '../pages/NewPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { RegisterPage } from '../pages/RegisterPage';
import { RenamePage } from '../pages/RenamePage';
import { SelectPage } from '../pages/SelectPage';
import { StatusPage } from '../pages/StatusPage';
import { TopMenuPage } from '../pages/TopMenuPage';
import { TranscriptPage } from '../pages/TranscriptPage';

export class Viewport extends QxComposite {
    application: QxMobileApplication;
    manager: QxPageManager;
    pageBoard: BoardPage;
    pageDelete: DeletePage;
    pageDetails: DetailsPage;
    pageEditor: EditorPage;
    pageLogin: LoginPage;
    pageNew: NewPage;
    pageProjects: ProjectsPage;
    pageRegister: RegisterPage;
    pageRename: RenamePage;
    pageSelect: SelectPage;
    pageStatus: StatusPage;
    pageTopMenu: TopMenuPage;
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
        this.pageDelete = DeletePage.getInstance();
        this.pageDetails = DetailsPage.getInstance();
        this.pageEditor = EditorPage.getInstance();
        this.pageLogin = LoginPage.getInstance();
        this.pageNew = NewPage.getInstance();
        this.pageProjects = ProjectsPage.getInstance();
        this.pageRegister = RegisterPage.getInstance();
        this.pageRename = RenamePage.getInstance();
        this.pageSelect = SelectPage.getInstance();
        this.pageStatus = StatusPage.getInstance();
        this.pageTopMenu = TopMenuPage.getInstance();
        this.pageTranscript = TranscriptPage.getInstance();
        this.addMasterPage();
        this.addDetailPages();
        this.buildRouting();
        (window as any).X = QxTooltip;
    }

    addDetailPages() {
        this.manager.addDetailPages([
            this.pageBoard, this.pageDelete, this.pageDetails, this.pageEditor,
            this.pageLogin, this.pageNew, this.pageProjects, this.pageRegister,
            this.pageRename, this.pageSelect, this.pageStatus, this.pageTranscript
        ]);
    }

    addMasterPage() {
        this.manager.addMaster(this.pageTopMenu);
    }

    buildRouting() {
        this.routing.onGet(PageConstants.routeBoard, this.pageBoard);
        this.routing.onGet(PageConstants.routeDelete, this.pageDelete);
        this.routing.onGet(PageConstants.routeDetails, this.pageDetails);
        this.routing.onGet(PageConstants.routeEditor, this.pageEditor);
        this.routing.onGet(PageConstants.routeLogin, this.pageLogin);
        this.routing.onGet(PageConstants.routeNew, this.pageNew);
        this.routing.onGet(PageConstants.routeProjects, this.pageProjects);
        this.routing.onGet(PageConstants.routeRegister, this.pageRegister);
        this.routing.onGet(PageConstants.routeRename, this.pageRename);
        this.routing.onGet(PageConstants.routeSelect, this.pageSelect);
        this.routing.onGet(PageConstants.routeStatus, this.pageStatus);
        this.routing.onGet(PageConstants.routeTopMenu, this.pageTopMenu);
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
        QxMobileApplication.executeGet(PageConstants.routeTopMenu);
    }

}

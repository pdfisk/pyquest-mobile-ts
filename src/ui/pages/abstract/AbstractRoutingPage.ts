import { PageConstants } from "../../../constants/PageConstants";
import { QxMobileApplication } from "../../../qx/application/QxMobileApplication";
import { QxNavigationPage } from "../../../qx/ui/mobile/page/QxNavigationPage";

export abstract class AbstractRoutingPage extends QxNavigationPage {

    showBoard() {
        QxMobileApplication.executeGet(PageConstants.routeBoard);
    }

    showEditor() {
        QxMobileApplication.executeGet(PageConstants.routeEditor);
    }

    showLogin() {
        QxMobileApplication.executeGet(PageConstants.routeLogin);
    }

    showOverview() {
        QxMobileApplication.executeGet(PageConstants.routeTopMenu);
    }

    showProjects() {
        QxMobileApplication.executeGet(PageConstants.routeProjects);
    }

    showRegister() {
        QxMobileApplication.executeGet(PageConstants.routeRegister);
    }

    showRename() {
        QxMobileApplication.executeGet(PageConstants.routeRename);
    }

    showStatus() {
        QxMobileApplication.executeGet(PageConstants.routeStatus);
    }

    showTopMenu() {
        QxMobileApplication.executeGet(PageConstants.routeTopMenu);
    }

    showTranscript() {
        QxMobileApplication.executeGet(PageConstants.routeTranscript);
    }

}

import { PageConstants } from "../../../constants/PageConstants";
import { QxMobileApplication } from "../../../qx/application/QxMobileApplication";
import { QxNavigationPage } from "../../../qx/ui/mobile/page/QxNavigationPage";

export abstract class AbstractRoutingPage extends QxNavigationPage {

    showBoard() {
        QxMobileApplication.executeGet(PageConstants.routeBoard);
    }

    showDelete() {
        QxMobileApplication.executeGet(PageConstants.routeDelete);
    }

    showDetails() {
        QxMobileApplication.executeGet(PageConstants.routeDetails);
    }

    showEditor() {
        QxMobileApplication.executeGet(PageConstants.routeEditor);
    }

    showLogin() {
        QxMobileApplication.executeGet(PageConstants.routeLogin);
    }

    showNew() {
        QxMobileApplication.executeGet(PageConstants.routeNew);
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

    showSelect() {
        QxMobileApplication.executeGet(PageConstants.routeSelect);
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

import { PageConstants } from "../../constants/PageConstants";
import { QxMobileApplication } from "../../qx/application/QxMobileApplication";
import { QxNavigationPage } from "../../qx/ui/mobile/page/QxNavigationPage";

export abstract class AbstractRoutingPage extends QxNavigationPage {

    showBoard() {
        QxMobileApplication.executeGet(PageConstants.routeBoard);
    }

    showEditor() {
        QxMobileApplication.executeGet(PageConstants.routeEditor);
    }

    showHome() {
        QxMobileApplication.executeGet(PageConstants.routeHome);
    }

    showOverview() {
        QxMobileApplication.executeGet(PageConstants.routeTopMenu);
    }

    showProjects() {
        QxMobileApplication.executeGet(PageConstants.routeProjects);
    }

    showStatus() {
        QxMobileApplication.executeGet(PageConstants.routeStatus);
    }

    showTranscript() {
        QxMobileApplication.executeGet(PageConstants.routeTranscript);
    }

}

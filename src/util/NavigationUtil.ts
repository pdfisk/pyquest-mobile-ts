import { PageConstants } from "../constants/PageConstants";
import { QxMobileApplication } from "../qx/application/QxMobileApplication";

export class NavigationUtil {

    static showPage(page: string) {
        switch (page) {
            case PageConstants.pathBoard:
                this.showBoard();
                break;
            case PageConstants.pathEditor:
                this.showEditor();
                break;
            case PageConstants.pathHome:
                this.showHome();
                break;
            case PageConstants.pathOverview:
                this.showOverview();
                break;
            case PageConstants.pathProjects:
                this.showProjects();
                break;
            case PageConstants.pathStatus:
                this.showStatus();
                break;
            case PageConstants.pathTranscript:
                this.showTranscript();
                break;
            default:
                console.log('showPage', page);
                break;
        }
    }

    static showBoard() {
        QxMobileApplication.executeGet(PageConstants.routeBoard);
    }

    static showEditor() {
        QxMobileApplication.executeGet(PageConstants.routeEditor);
    }

    static showHome() {
        QxMobileApplication.executeGet(PageConstants.routeHome);
    }

    static showOverview() {
        QxMobileApplication.executeGet(PageConstants.routeOverview);
    }

    static showProjects() {
        QxMobileApplication.executeGet(PageConstants.routeProjects);
    }

    static showStatus() {
        QxMobileApplication.executeGet(PageConstants.routeStatus);
    }

    static showTranscript() {
        QxMobileApplication.executeGet(PageConstants.routeTranscript);
    }

}

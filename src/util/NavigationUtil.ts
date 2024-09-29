import { PageConstants } from "../constants/PageConstants";
import { QxMobileApplication } from "../qx/application/QxMobileApplication";

export class NavigationUtil {

    static showPage(page: string) {
        switch (page) {
            case PageConstants.tagBoard:
                this.showBoard();
                break;
            case PageConstants.tagEditor:
                this.showEditor();
                break;
            case PageConstants.tagHome:
                this.showHome();
                break;
            case PageConstants.tagOverview:
                this.showOverview();
                break;
            case PageConstants.tagProjects:
                this.showProjects();
                break;
            case PageConstants.tagStatus:
                this.showStatus();
                break;
            case PageConstants.tagTranscript:
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

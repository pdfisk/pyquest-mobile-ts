import { PageConstants } from "../constants/PageConstants";
import { QxMobileApplication } from "../qx/application/QxMobileApplication";
import { DebugUtil } from '../vm/util/DebugUtil';

export class NavigationUtil {

    static showPage(page: string) {
        switch (page) {
            case PageConstants.pathBoard:
                this.showBoard();
                break;
            case PageConstants.pathEditor:
                this.showEditor();
                break;
            case PageConstants.pathProjects:
                this.showProjects();
                break;
            case PageConstants.pathRename:
                this.showRename();
                break;
            case PageConstants.pathStatus:
                this.showStatus();
                break;
            case PageConstants.pathTopMenu:
                this.showTopMenu();
                break;
            case PageConstants.pathTranscript:
                this.showTranscript();
                break;
            default:
                DebugUtil.log('showPage', page);
                break;
        }
    }

    static showBoard() {
        QxMobileApplication.executeGet(PageConstants.routeBoard);
    }

    static showEditor() {
        QxMobileApplication.executeGet(PageConstants.routeEditor);
    }

    static showTopMenu() {
        QxMobileApplication.executeGet(PageConstants.routeTopMenu);
    }

    static showProjects() {
        QxMobileApplication.executeGet(PageConstants.routeProjects);
    }

    static showRename() {
        QxMobileApplication.executeGet(PageConstants.routeRename);
    }

    static showStatus() {
        QxMobileApplication.executeGet(PageConstants.routeStatus);
    }

    static showTranscript() {
        QxMobileApplication.executeGet(PageConstants.routeTranscript);
    }

}

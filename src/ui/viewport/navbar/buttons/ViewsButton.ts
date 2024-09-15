import { LabelConstants } from "../../../../constants/LabelConstants";
import { SessionConstants } from "../../../../constants/SessionConstants";
import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuButton } from "../../../../qx/ui/menu/QxMenuButton";
import { QxMenuSeparator } from "../../../../qx/ui/menu/QxMenuSeparator";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";
import { ConsoleWindow } from "../../../windows/console/ConsoleWindow";
import { ProjectsWindow } from "../../../windows/projects/ProjectsWindow";
import { TranscriptWindow } from "../../../windows/transcript/TranscriptWindow";
import { UsersWindow } from "../../../windows/users/UsersWindow";
import { VisitorsWindow } from "../../../windows/visitors";

export class ViewsButton extends QxMenuBarButton {
    menu?: QxMenu;
    usersButton: any;
    usersSeparator: any;
    visitorsButton: any;

    initialize() {
        super.initialize();
        this.setLabel(LabelConstants.ButtonLabelViews);
        this.usersButton = QxMenuButton.create(LabelConstants.ButtonLabelUsers, () => {
            this.openUsers();
        });
        this.visitorsButton = QxMenuButton.create(LabelConstants.ButtonLabelVisitors, () => {
            this.openVisitors();
        });
        this.usersSeparator = new QxMenuSeparator;
        this.setMenu(this.createMenu());
        this.updateMenu(SessionConstants.SessionLoggedOut);
    }

    createMenu(): QxMenu {
        this.menu = new QxMenu();
        this.menu.addButton(LabelConstants.ButtonLabelProjects, () => {
            this.openProjects();
        });
        this.menu.addButton(LabelConstants.ButtonLabelConsole, () => {
            this.openConsole();
        });
        this.menu.addSeparator();
        this.menu.addButton(LabelConstants.ButtonLabelTranscript, () => {
            this.openTranscript();
        });
        return this.menu;
    }

    openConsole() {
        new ConsoleWindow();
    }

    openProjects() {
        new ProjectsWindow();
    }

    openTranscript() {
        TranscriptWindow.getInstance().show();
    }

    openUsers() {
        new UsersWindow();
    }

    openVisitors() {
        new VisitorsWindow();
    }

    updateMenu(status: string) {
        if (status == SessionConstants.SessionLoggedInAsAdmin) {
            this.menu?.add(this.usersSeparator);
            this.menu?.add(this.usersButton);
            this.menu?.add(this.visitorsButton);
        }
        else {
            this.menu?.remove(this.usersSeparator);
            this.menu?.remove(this.usersButton);
            this.menu?.remove(this.visitorsButton);
        }
    }

}

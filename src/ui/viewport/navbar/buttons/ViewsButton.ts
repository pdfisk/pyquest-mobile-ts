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

export class ViewsButton extends QxMenuBarButton {
    menu?: QxMenu;
    usersButton: any;
    usersSeparator: any;

    initialize() {
        super.initialize();
        this.setLabel(LabelConstants.ButtonLabelViews);
        this.usersButton = QxMenuButton.create(LabelConstants.ButtonLabelUsers, () => {
            this.openUsers();
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

    updateMenu(status: string) {
        console.log('updateMenu', status);
        if (status == SessionConstants.SessionLoggedInAsAdmin) {
            this.menu?.add(this.usersSeparator);
            this.menu?.add(this.usersButton);
        }
        else {
            this.menu?.remove(this.usersSeparator);
            this.menu?.remove(this.usersButton);
        }
        console.log('updateMenu2', status);
    }

}

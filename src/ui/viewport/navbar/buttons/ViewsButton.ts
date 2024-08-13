import { LabelConstants } from "../../../../constants/LabelConstants";
import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";
import { ConsoleWindow } from "../../../windows/console/ConsoleWindow";
import { ProjectsWindow } from "../../../windows/projects/ProjectsWindow";
import { TranscriptWindow } from "../../../windows/transcript/TranscriptWindow";
import { UsersWindow } from "../../../windows/users/UsersWindow";

export class ViewsButton extends QxMenuBarButton {

    initialize() {
        super.initialize();
        this.setLabel(LabelConstants.ButtonLabelViews);
        this.setMenu(this.createMenu());
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        menu.addButton(LabelConstants.ButtonLabelProjects, () => {
            this.openProjects();
        });
        menu.addButton(LabelConstants.ButtonLabelUsers, () => {
            this.openUsers();
        });
        menu.addButton('Console', () => {
            this.openConsole();
        });
        menu.addSeparator();
        menu.addButton('Transcript', () => {
            this.openTranscript();
        });
        return menu;
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

}

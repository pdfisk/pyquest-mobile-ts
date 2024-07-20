import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";
import { TranscriptWindow } from "../../../windows/transcript/TranscriptWindow";

export class ViewsButton extends QxMenuBarButton {

    initialize() {
        super.initialize();
        this.setLabel('Views');
        this.setMenu(this.createMenu());
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        menu.addButton('Transcript', () => {
            TranscriptWindow.getInstance();
        });
        return menu;
    }

}

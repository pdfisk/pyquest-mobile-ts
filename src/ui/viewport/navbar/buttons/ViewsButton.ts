import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";

export class ViewsButton extends QxMenuBarButton {

    initialize() {
        super.initialize();
        this.setLabel('Views');
        this.setMenu(this.createMenu());
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        menu.addButton('Transcript', () => { console.log('TRANSCRIPT') });
        return menu;
    }

}

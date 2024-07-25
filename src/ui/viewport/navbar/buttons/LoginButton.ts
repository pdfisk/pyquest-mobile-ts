import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";
import { LoginWindow } from "../../../windows/login/LoginWindow";
import { RegisterWindow } from "../../../windows/login/RegisterWindow";

export class LoginButton extends QxMenuBarButton {

    initialize() {
        super.initialize();
        this.setLabel('Login');
        this.setMenu(this.createMenu());
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        menu.addButton('Login', () => {
            this.openLogin();
        });
        menu.addSeparator();
        menu.addButton('Register', () => {
            this.openRegister();
        });
        return menu;
    }

    openLogin() {
        LoginWindow.getInstance();
    }

    openRegister() {
        RegisterWindow.getInstance();
    }

}

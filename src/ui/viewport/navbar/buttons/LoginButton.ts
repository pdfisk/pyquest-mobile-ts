import { EventConstants } from "../../../../constants/EventConstants";
import { EventBus } from "../../../../messages/EventBus";
import { QxMenu } from "../../../../qx/ui/menu/QxMenu";
import { QxMenuButton } from "../../../../qx/ui/menu/QxMenuButton";
import { QxMenuBarButton } from "../../../../qx/ui/menubar/QxMenuBarButton";
import { LoginWindow } from "../../../windows/login/LoginWindow";
import { RegisterWindow } from "../../../windows/login/RegisterWindow";

export class LoginButton extends QxMenuBarButton {
    loginMenuButton?: QxMenuButton;

    initialize() {
        super.initialize();
        this.setLabel('Login');
        this.setMenu(this.createMenu());
        EventBus.subscribe(EventConstants.LoginStatusChanged, this.onEventStatusChanged, this)
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        this.loginMenuButton = menu.addButton('Login', () => {
            this.loginOrLogout();
        });
        menu.addSeparator();
        menu.addButton('Register', () => {
            this.openRegister();
        });
        return menu;
    }

    getLoginLabel(): string {
        if (this.loginMenuButton)
            return this.loginMenuButton.getLabel();
        return '';
    }

    loginOrLogout() {
        if (this.getLoginLabel() == 'Login')
            LoginWindow.getInstance().show();
        else
            EventBus.dispatch(EventConstants.LoginStatusChanged, EventConstants.StatusLoggedOut);
    }

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        if (status == EventConstants.StatusLoggedIn || status == EventConstants.StatusLoggedInAsAdmin)
            this.setLoginLabel('Logout');
        else
            this.setLoginLabel('Login');
    }

    openRegister() {
        RegisterWindow.getInstance().show();
    }

    setLoginLabel(label: string) {
        if (this.loginMenuButton)
            this.loginMenuButton.setLabel(label);
    }

}

import { EventConstants } from "../../../../constants/EventConstants";
import { LabelConstants } from "../../../../constants/LabelConstants";
import { SessionConstants } from "../../../../constants/SessionConstants";
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
        this.setLabel(LabelConstants.ButtonLabelLogin);
        this.setMenu(this.createMenu());
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this)
    }

    createMenu(): QxMenu {
        const menu = new QxMenu();
        this.loginMenuButton = menu.addButton(LabelConstants.ButtonLabelLogin, () => {
            this.loginOrLogout();
        });
        menu.addSeparator();
        menu.addButton(LabelConstants.ButtonLabelRegister, () => {
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
        if (this.getLoginLabel() == LabelConstants.ButtonLabelLogin)
            LoginWindow.getInstance().show();
        else
            EventBus.dispatch(EventConstants.EventSessionStatusChanged, SessionConstants.SessionLoggedOut);
    }

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        if (status == SessionConstants.SessionLoggedIn || status == SessionConstants.SessionLoggedInAsAdmin)
            this.setLoginLabel(LabelConstants.ButtonLabelLogout);
        else
            this.setLoginLabel(LabelConstants.ButtonLabelLogin);
    }

    openRegister() {
        RegisterWindow.getInstance().show();
    }

    setLoginLabel(label: string) {
        if (this.loginMenuButton)
            this.loginMenuButton.setLabel(label);
    }

}

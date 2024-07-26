import { ColorConstants } from '../../../constants/ColorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { EventBus } from '../../../messages/EventBus';
import { QxWidget } from '../../../qx/ui/core/QxWidget';
import { QxToolBarToolBar } from '../../../qx/ui/toolbar/QxToolBarToolBar';
import { LoginButton } from './buttons/LoginButton';
import { ViewsButton } from './buttons/ViewsButton';
import { LogoPanel } from './logo/LogoPanel';

export class NavBar extends QxToolBarToolBar {
    loginButton: any;

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.loginButton = new LoginButton;
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
        this.addLogo();
        this.addButtons();
        EventBus.subscribe(EventConstants.LoginStatusChanged, this.onEventStatusChanged, this);
    }

    addButtons() {
        this.addWidget(new ViewsButton());
        this.addWidget(this.loginButton);
    }

    addLogo() {
        this.addWidget(new LogoPanel());
    }

    addWidget(childWidget: QxWidget) {
        this.widget.add(childWidget.widget);
    }

    onEventStatusChanged(message: any) {
        const status = message.getData().status;
        if (status == EventConstants.StatusLoggedIn || status == EventConstants.StatusLoggedInAsAdmin)
            this.setLoginLabel('Logout');
        else
            this.setLoginLabel('Login');
    }

    setLoginLabel(label: string) {
        this.loginButton.setLabel(label);
    }

}

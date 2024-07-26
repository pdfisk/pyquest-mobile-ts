import { ColorConstants } from '../../../constants/ColorConstants';
import { EventConstants } from '../../../constants/EventConstants';
import { LabelConstants } from '../../../constants/LabelConstants';
import { SessionConstants } from '../../../constants/SessionConstants';
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
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
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
        if (status == SessionConstants.SessionLoggedIn || status == SessionConstants.SessionLoggedInAsAdmin)
            this.setLoginLabel(LabelConstants.ButtonLabelLogout);
        else
            this.setLoginLabel(LabelConstants.ButtonLabelLogin);
    }

    setLoginLabel(label: string) {
        this.loginButton.setLabel(label);
    }

}

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
    loginButton?: LoginButton;
    viewsButton?: ViewsButton;
    static instance: NavBar;

    static getInstance(): NavBar {
        if (!this.instance)
            this.instance = new NavBar();
        return this.instance;
    }

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
        this.addLogo();
        this.loginButton = new LoginButton;
        this.viewsButton = new ViewsButton;
        EventBus.subscribe(EventConstants.EventSessionStatusChanged, this.onEventStatusChanged, this);
    }

    addButtons() {
        this.addWidget(this.viewsButton as ViewsButton);
        this.addWidget(this.loginButton as LoginButton);
    }

    addLogo() {
        this.addWidget(new LogoPanel());
    }

    addWidget(childWidget: QxWidget) {
        this.widget.add(childWidget.widget);
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    onAppear() {
        super.onAppear();
        this.addButtons();
    }

    onEventStatusChanged(message: any) {
        const status: string = message.getData().status;
        this.setLoginLabel(status);
        this.setViewsMenu(status);
    }

    setLoginLabel(status: string) {
        let label: string;
        if (status == SessionConstants.SessionLoggedInAsUser || status == SessionConstants.SessionLoggedInAsAdmin)
            label = LabelConstants.ButtonLabelLogout;
        else
            label = LabelConstants.ButtonLabelLogin;
        this.loginButton?.setLabel(label);
    }

    setViewsMenu(status: string) {
        this.viewsButton?.updateMenu(status);
    }

}

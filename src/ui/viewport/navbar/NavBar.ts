import { ColorConstants } from '../../../constants/ColorConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxWidget } from '../../../qx/ui/core/QxWidget';
import { QxToolBarToolBar } from '../../../qx/ui/toolbar/QxToolBarToolBar';
import { LoginButton } from './buttons/LoginButton';
import { ViewsButton } from './buttons/ViewsButton';
import { LogoPanel } from './logo/LogoPanel';

export class NavBar extends QxToolBarToolBar {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
        this.addLogo();
        this.addButtons();
    }

    addButtons() {
        this.addWidget(new ViewsButton());
        this.addWidget(new LoginButton());
    }

    addLogo() {
        this.addWidget(new LogoPanel());
    }

    addWidget(childWidget: QxWidget) {
        this.widget.add(childWidget.widget);
    }

}

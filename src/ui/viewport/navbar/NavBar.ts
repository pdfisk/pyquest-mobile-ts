import { ColorConstants } from '../../../constants/ColorConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxMenuBarButton } from '../../../qx/ui/menubar/QxMenuBarButton';
import { QxToolBarToolBar } from '../../../qx/ui/toolbar/QxToolBarToolBar';
import { LoginButton } from './buttons/LoginButton';
import { ViewsButton } from './buttons/ViewsButton';

export class NavBar extends QxToolBarToolBar {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
        this.addButtons();
    }

    addButton(button: QxMenuBarButton) {
        this.widget.add(button.widget);
    }

    addButtons() {
        this.addButton(new ViewsButton());
        this.addButton(new LoginButton());
    }

}

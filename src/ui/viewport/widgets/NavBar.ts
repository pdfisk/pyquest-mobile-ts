
import { ColorConstants } from '../../../constants/ColorConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxMenuBarButton } from '../../../qx/ui/menubar/QxMenuBarButton';
import { QxToolBarToolBar } from '../../../qx/ui/toolbar/QxToolBarToolBar';

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

    addButton(label: string) {
        const menuButton: QxMenuBarButton = new QxMenuBarButton();
        menuButton.setLabel(label);
        this.widget.add(menuButton.widget);
        console.log('addButton', label);
        (window as any).X = [menuButton, this];
    }

    addButtons() {
        this.addButton('Views');
    }

}

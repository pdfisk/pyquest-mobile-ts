
import { ColorConstants } from '../../../constants/ColorConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxToolBarToolBar } from '../../../qx/ui/toolbar/QxToolBarToolBar';

export class NavBar extends QxToolBarToolBar {

    constructor() {
        super();
    }
    
    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
    }

}

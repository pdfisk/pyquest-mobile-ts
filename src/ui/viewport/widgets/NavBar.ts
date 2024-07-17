import { ColorConstants } from '../../../constants/ColorConstants';
import { SizeConstants } from '../../../constants/SizeConstants';
import { QxToolBar } from '../../../qx/ui/toolbar/QxToolBar';

export class NavBar extends QxToolBar {

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.NavBarBackground);
        this.setHeight(SizeConstants.NavBarHeight);
    }

}

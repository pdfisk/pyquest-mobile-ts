import { QxNavigationBar } from "../../qx/ui/mobile/navigationBar/QxNavigationBar";
import { DebugUtil } from '../../util/DebugUtil';

export class NavigationBar extends QxNavigationBar {
    // topMenuButton: TopMenuButton;
 
    constructor(widget: any) {
        super(widget);
        // this.topMenuButton = new TopMenuButton;
        DebugUtil.log('NavigationBar constructor');
    }

    showTopMenu(value: boolean) {
        DebugUtil.log('showTopMenu');
        // if (value)
        //     this.topMenuButton.show();
        // else
        //     this.topMenuButton.hide();
    }

}

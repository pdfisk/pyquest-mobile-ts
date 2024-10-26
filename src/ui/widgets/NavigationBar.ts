import { QxNavigationBar } from "../../qx/ui/mobile/navigationBar/QxNavigationBar";

export class NavigationBar extends QxNavigationBar {
    // topMenuButton: TopMenuButton;
 
    constructor(widget: any) {
        super(widget);
        // this.topMenuButton = new TopMenuButton;
        console.log('NavigationBar constructor');
    }

    showTopMenu(value: boolean) {
        console.log('showTopMenu');
        // if (value)
        //     this.topMenuButton.show();
        // else
        //     this.topMenuButton.hide();
    }

}

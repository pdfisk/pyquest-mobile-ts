import { ColorConstants } from '../../constants/ColorConstants';
import { SessionStatus } from '../../session/SessionStatus';
import { DockPanel } from '../widgets';
import { Desktop } from './desktop/Desktop';
import { NavBar } from './navbar/NavBar';

export class Viewport extends DockPanel {
    desktop: Desktop;
    desktopHeight: number = 0;
    desktopWidth: number = 0;
    navBar: NavBar;
    static instance: Viewport;

    static getInstance(root: any = null) {
        if (this.instance === undefined)
            this.instance = new Viewport(root);
        return this.instance;
    }

    constructor(root: any) {
        super();
        this.desktop = Desktop.getInstance();
        this.navBar = NavBar.getInstance();
        this.addNorth(this.navBar);
        this.addCenter(this.desktop);
        root.add(this.widget, { top: 0, right: 0, bottom: 0, left: 0 });
    }

    initialize() {
        super.initialize();
        SessionStatus.getInstance();
        this.setBackgroundColor(ColorConstants.ViewportBackground);
    }

    onResize() {
        const newDesktopWidth = window.innerWidth;
        const newDesktopHeight = window.innerHeight - this.navBar.getBoundsHeight();
        if (newDesktopWidth !== this.desktopWidth || newDesktopHeight != this.desktopHeight) {
            this.desktopWidth = newDesktopWidth;
            this.desktopHeight = newDesktopHeight;
            this.desktop.setImageSize(this.desktopWidth, this.desktopHeight);
        }
    }

}

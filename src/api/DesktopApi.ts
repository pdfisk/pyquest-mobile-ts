import { Version } from '../constants/Version';
import { Viewport } from '../ui/viewport/Viewport';

export class DesktopApi {
    /**
     * DesktopApi is a singletom.
     * Upon creation it will instantiate the Viewport singleton
     * which, in turn, creates the rest of the user interface.
     * 
     */

    static instance: DesktopApi;

    static getInstance(): DesktopApi {
        if (!this.instance)
            this.instance = new DesktopApi;
        return this.instance;
    }

    static timestamp(): string {
        return Version.timestamp;
    }

    static version(): string {
        return Version.version;
    }

    start(root: any) {
        Viewport.getInstance(root);
    }

}

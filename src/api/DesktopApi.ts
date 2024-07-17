import { Viewport } from '../ui/viewport/Viewport';

export class DesktopApi {

    static instance: DesktopApi;

    static getInstance(): DesktopApi {
        if (!this.instance)
            this.instance = new DesktopApi;
        return this.instance;
    }

    start(root: any) {
        Viewport.getInstance(root);
    }

}

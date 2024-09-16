import { UrlConstants } from '../constants';
import { Version } from '../constants/Version';
import { Server } from '../server/Server';
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

    getIpAddress() {
        fetch(UrlConstants.ipify)
            .then(response => response.json())
            .then(data => {
                const ip_address: string = data.ip;
                if (ip_address !== UrlConstants.myip)
                    Server.logIpAddress(ip_address);
            })
            .catch(error => {
            });
    }

    start(root: any) {
        this.getIpAddress();
        Viewport.getInstance(root);
    }

}

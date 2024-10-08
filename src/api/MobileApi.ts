import { UrlConstants } from '../constants';
import { Version } from '../constants/Version';
import { Server } from '../server/Server';
import { Viewport } from '../ui';

export class MobileApi {
    /**
     * MobileApi is a singletom.
     * Upon creation it will instantiate the Viewport singleton
     * which, in turn, creates the rest of the user interface.
     * 
     */

    static instance: MobileApi;

    static getInstance(): MobileApi {
        if (!this.instance)
            this.instance = new MobileApi;
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

    start() {
        this.getIpAddress();
        Viewport.getInstance();
    }

}

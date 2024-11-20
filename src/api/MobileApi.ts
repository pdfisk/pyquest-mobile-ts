import { UrlConstants } from '../constants';
import { Version } from '../constants/Version';
import { MessageBus } from '../messages';
import { Server } from '../server/Server';
import { SessionStatus } from '../session';
import { Viewport } from '../ui';
import { FunctionManager } from '../util/FunctionManager';
import { NotificationManager } from '../util/NotificationManager';

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

    dispatch(name:string, ...args:any[]) {
        MessageBus.dispatch(name, ...args);
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
        FunctionManager.init();
        NotificationManager.init();
        SessionStatus.getInstance();
        this.getIpAddress();
        Viewport.getInstance();
    }

}

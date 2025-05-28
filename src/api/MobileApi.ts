import { MobileVersion } from '../constants/MobileVersion';
import { MessageBus } from '../messages/MessageBus';
import { SessionStatus } from '../session/SessionStatus';
import { Viewport } from '../ui/viewport/Viewport';
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
        return MobileVersion.timestamp;
    }

    static version(): string {
        return MobileVersion.version;
    }

    dispatch(name: string, ...args: any[]) {
        MessageBus.dispatch(name, ...args);
    }

    start() {
        FunctionManager.init();
        NotificationManager.init();
        SessionStatus.getInstance();
        Viewport.getInstance();
    }

}

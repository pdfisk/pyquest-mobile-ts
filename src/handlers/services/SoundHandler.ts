import { ActionConstants } from '../../constants/ActionConstants';
import { SoundManager } from "../../util/SoundManager";
import { DebugUtil } from '../../vm/util/DebugUtil';
import { HandlerBase } from "./HandlerBase";

export class SoundHandler extends HandlerBase {

    static instance: SoundHandler;

    static getInstance(): SoundHandler {
        if (!this.instance)
            this.instance = new SoundHandler;
        return this.instance;
    }

    static handleAction(args: any[]) {
        this.getInstance().handleAction(args);
    }

    handleAction(args: any[]) {
        const action = args.shift();
        switch (action) {
            case ActionConstants.ActionPlay:
                this.handleActionPlay(args);
                break;
            default:
                DebugUtil.log('SoundHandler handleAction', action, args);
                break;
        }
    }

    handleActionPlay(args: any[]) {
        const sound = args.shift();
        SoundManager.playSound(sound);
    }

}

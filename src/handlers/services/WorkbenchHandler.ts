import { EventConstants, PageConstants } from "../../constants";
import { ActionConstants } from "../../constants/ActionConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { MessageBus } from "../../messages";
import { NavigationUtil } from "../../util/NavigationUtil";
import { ErrorHandler } from "../ErrorHandler";
import { HandlerBase } from "./HandlerBase";

export class WorkbenchHandler extends HandlerBase {
    static instance: WorkbenchHandler;

    static getInstance(): WorkbenchHandler {
        if (!this.instance)
            this.instance = new WorkbenchHandler;
        return this.instance;
    }

    static handleAction(ownerId: number, args: any[]) {
        this.getInstance().handleAction(ownerId, args);
    }

    handleAction(ownerId: number, args: any[]) {
        const action: string = args.shift();
        switch (action) {
            case ActionConstants.ActionAutotab:
                this.actionAutotab(ownerId, args);
                break;
            case ActionConstants.ActionSync:
                this.actionSync(ownerId, args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.WorkbenchHandlerMissingAction, action);
                break;
        }
    }

    actionAutotab(ownerId: number, args: any) {
        const tag: string = args.shift();
        NavigationUtil.showPage(tag);
        switch (tag) {
            case PageConstants.pathBoard:
                MessageBus.dispatch(EventConstants.BoardClear, {});
                break;
            case PageConstants.pathTranscript:
                MessageBus.dispatch(EventConstants.TranscriptClear, {});
                break;
        }
    }

    actionSync(ownerId: number, args: any[]) {
        // console.log('actionSync', ownerId, args);
    }

}

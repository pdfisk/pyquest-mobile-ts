import { ActionConstants } from "../constants/ActionConstants";
import { ErrorConstants } from "../constants/ErrorConstants";
import { ErrorHandler } from "./ErrorHandler";
import { BoardHandler } from "./services/BoardHandler";
import { SoundHandler } from "./services/SoundHandler";
import { WorkbenchHandler } from "./services/WorkbenchHandler";

export class ActionHandler {

    static handleAction(service: string, args: any[]) {
        const ownerId: number = 0;
        switch (service) {
            case ActionConstants.ServiceBoard:
                BoardHandler.handleAction(ownerId, args);
                break;
            case ActionConstants.ServiceSound:
                SoundHandler.handleAction(args);
                break;
            case ActionConstants.ServiceWorkbench:
                WorkbenchHandler.handleAction(ownerId, args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.ActionHandlerMissingService, service);
                break;
        }
    }

}

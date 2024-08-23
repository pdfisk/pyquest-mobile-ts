import { ActionConstants } from "../constants/ActionConstants";
import { ErrorConstants } from "../constants/ErrorConstants";
import { ErrorHandler } from "./ErrorHandler";
import { BoardHandler } from "./services/BoardHandler";
import { WorkbenchHandler } from "./services/WorkbenchHandler";

export class ActionHandler {

    static handleAction(data: any) {
        const service: string = data.service;
        const ownerId: number = data.input_id;
        const args: any = data.args;
        switch (service) {
            case ActionConstants.ServiceBoard:
                BoardHandler.handleAction(ownerId, args);
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

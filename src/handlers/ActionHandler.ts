import { ActionConstants } from "../constants/ActionConstants";
import { ErrorConstants } from "../constants/ErrorConstants";
import { ActionRec } from "../interfaces/ActionRec";
import { ErrorHandler } from "./ErrorHandler";
import { BoardHandler } from "./services/BoardHandler";
import { WorkbenchHandler } from "./services/WorkbenchHandler";

export class ActionHandler {

    static handleAction(actionRec: ActionRec) {
        const service: string = actionRec.service;
        const ownerId: number = actionRec.input_id;
        const args: any[] = actionRec.args;
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

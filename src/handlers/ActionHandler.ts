import { ActionConstants } from "../constants/ActionConstants";
import { ErrorConstants } from "../constants/ErrorConstants";
import { ErrorHandler } from "./ErrorHandler";
import { WorkbenchHandler } from "./services/WorkbenchHandler";

export class ActionHandler {

    static handleAction(data: any) {
        const service: string = data.service;
        const args: any[] = data.args;
        switch (service) {
            case ActionConstants.ServiceWorkbench:
                WorkbenchHandler.handleAction(args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.ActionHandlerMissingService, service);
                break;
        }
    }

}

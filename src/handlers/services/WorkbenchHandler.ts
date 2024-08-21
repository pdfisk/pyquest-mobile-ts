import { ActionConstants } from "../../constants/ActionConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { ErrorHandler } from "../ErrorHandler";

export class WorkbenchHandler {

    static handleAction(args: any[]) {
        const action: string = args.shift();
        switch (action) {
            case ActionConstants.ActionAutotab:
                this.actionAutotab(args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.WorkbenchHandlerMissingAction, action);
                break;
        }
    }

    static actionAutotab(args: any[]) {
        const tab: string = args.shift();
        console.log('actionAutotab', tab);
    }

}

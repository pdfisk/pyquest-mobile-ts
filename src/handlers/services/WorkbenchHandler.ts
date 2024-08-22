import { ActionConstants } from "../../constants/ActionConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { QxWidget } from "../../qx/ui/core/QxWidget";
import { ObjectRegistry } from "../../util/ObjectRegistry";
import { ErrorHandler } from "../ErrorHandler";

export class WorkbenchHandler {

    static handleAction(ownerId: number, args: any[]) {
        const action: string = args.shift();
        switch (action) {
            case ActionConstants.ActionAutotab:
                this.actionAutotab(ownerId, args);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.WorkbenchHandlerMissingAction, action);
                break;
        }
    }

    static actionAutotab(ownerId: number, args: any[]) {
        const owner: QxWidget = ObjectRegistry.getId(ownerId);
        const tab: string = args.shift();
        if ('setActiveTab' in owner)
            (owner as any).setActiveTab(tab);
        console.log('actionAutotab', tab, owner);
    }

}

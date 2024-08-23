import { ActionConstants } from "../../constants/ActionConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { QxWidget } from "../../qx/ui/core/QxWidget";
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
            default:
                ErrorHandler.logError(ErrorConstants.WorkbenchHandlerMissingAction, action);
                break;
        }
    }

    actionAutotab(ownerId: number, args: any[]) {
        const owner: QxWidget = this.getOwner(ownerId);
        const tab: string = args.shift();
        if ('setActiveTab' in owner)
            (owner as any).setActiveTab(tab);
    }

}

import { ActionConstants } from "../../constants/ActionConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { BoardPanel } from "../../ui/widgets/BoardPanel";
import { ErrorHandler } from "../ErrorHandler";
import { HandlerBase } from "./HandlerBase";

export class BoardHandler extends HandlerBase {
    static instance: BoardHandler;

    static getInstance(): BoardHandler {
        if (!this.instance)
            this.instance = new BoardHandler;
        return this.instance;
    }

    static handleAction(ownerId: number, args: any[]) {
        this.getInstance().handleAction(ownerId, args);
    }

    handleAction(ownerId: number, args: any[]) {
        const action: string = args.shift();
        const board: BoardPanel | null = this.getBoardPanel(ownerId);
        if (!board) return;
        switch (action) {
            case ActionConstants.ActionClear:
                this.actionClear(board);
                break;
            default:
                ErrorHandler.logError(ErrorConstants.BoardHandlerMissingAction, action);
                break;
        }
    }

    actionClear(board: BoardPanel) {
        board.clear();
    }

}

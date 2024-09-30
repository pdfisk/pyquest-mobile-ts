import { BoardPage } from "../../ui/pages/BoardPage";
import { BoardPanel } from "../../ui/widgets/BoardPanel";
import { ActionRec } from "./ActionRec";
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
        const board: BoardPanel = BoardPage.getBoardPanel();
        const actionRec = new ActionRec(board, action, args);
        if (board.hasAppeared)
            board.performAction(actionRec);
        else
            board.deferAction(actionRec);
    }

}

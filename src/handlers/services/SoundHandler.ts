import { BoardPage } from "../../ui/pages/BoardPage";
import { BoardPanel } from "../../ui/widgets/BoardPanel";
import { ActionRec } from "./ActionRec";
import { HandlerBase } from "./HandlerBase";

export class SoundHandler extends HandlerBase {

    static instance: SoundHandler;

    static getInstance(): SoundHandler {
        if (!this.instance)
            this.instance = new SoundHandler;
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

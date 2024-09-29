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

    // getTile(board: BoardPanel, row: number, column: number): BoardTile | undefined {
    //     return board.getTile(row, column);
    // }

    handleAction(ownerId: number, args: any[]) {
        const action: string = args.shift();
        console.log('HANDLE ACTION', action, args);
        // const board: BoardPanel | null = this.getBoardPanel(ownerId);
        // if (!board) return;
        // const actionRec = new ActionRec(board, action, args);
        // if (board.haveTilesAppeared())
        //     board.performAction(actionRec);
        // else
        //     board.deferAction(actionRec);
    }

}

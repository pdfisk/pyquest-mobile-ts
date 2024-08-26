import { BoardPanel } from "../../ui/widgets/BoardPanel";

export class ActionRec {
    action: string;
    args: any[];
    board: BoardPanel;

    constructor(board: BoardPanel, action: string, args: any[]) {
        this.board = board;
        this.action = action;
        this.args = args;
    }

}

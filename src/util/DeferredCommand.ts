import { DeferredConstants } from "../constants/DeferredConstants";
import { BoardTile } from "../ui/widgets/BoardTile";

export class DeferredCommand {
    args: any[];
    cmd: string;

    constructor(cmd: string, args: any[]) {
        this.cmd = cmd;
        this.args = args;
    }

    apply(tile: BoardTile) {
        switch (this.cmd) {
            case DeferredConstants.Clear:
                tile.clear();
                break;
            case DeferredConstants.Copy:
                const tile2 = this.args[0];
                tile.copy(tile2);
                break;
            case DeferredConstants.SetImage:
                const path = this.args[0];
                tile.setImage(path);
                break;
            case DeferredConstants.SetText:
                const text = this.args[0];
                tile.setText(text);
                break;
            default:
                console.log('apply', this);
                break;
        }
    }

}

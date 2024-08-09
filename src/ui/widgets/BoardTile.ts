import { ColorConstants } from "../../constants/ColorConstants";
import { QxComposite } from "../../qx/ui/container/QxComposite";

export class BoardTile extends QxComposite {

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

}

import { ColorConstants } from "../../constants/ColorConstants";
import { SizeConstants } from "../../constants/SizeConstants";
import { QxBasicAtom } from "../../qx/ui/basic/QxBasicAtom";
import { CenteredPanel } from "./CenteredPanel";

export class BoardTile extends CenteredPanel {

    constructor() {
        super(new QxBasicAtom());
        this.clear();
    }

    clear() {
        this.setLabel('');
    }

    copy(target: BoardTile) {
        target.setLabel(this.getLabel());
        this.clear();
    }

    getLabel(): string {
        return (this.child as QxBasicAtom).getLabel();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    onAppear() {
        this.setSize(SizeConstants.LabelSize24, SizeConstants.LabelSize24);
        super.onAppear();
    }

    setLabel(value: string) {
        (this.child as QxBasicAtom).setLabel(value);
        this.centerChild();
    }

}

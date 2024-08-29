import { ColorConstants } from "../../constants/ColorConstants";
import { QxBasicAtom } from "../../qx/ui/basic/QxBasicAtom";

export class BoardTile extends QxBasicAtom {

    constructor() {
        super();
        this.clear();
        this.setCenter(true);
        this.setRich(true);
        // this.setLabelStyle
    }

    clear() {
        this.clearIcon();
        this.clearLabel();
    }

    copy(target: BoardTile) {
        target.setLabel(this.getLabel());
        this.clear();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    setLabel(value: string) {
        if (value.length > 0)
            (window as any).X = this;
        const html = `<span style="font-size:24px;font-family:monospace,sans">${value}</span>`;
        super.setLabel(html);
    }

}

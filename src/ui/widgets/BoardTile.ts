import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { QxBasicAtom } from "../../qx/ui/basic/QxBasicAtom";

export class BoardTile extends QxBasicAtom {

    constructor() {
        super();
        this.clear();
        this.setCenter(true);
        this.setRich(true);
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

    setImage(fname: string) {
        console.log('setImage', fname);
    }

    setLabel(value: string) {
        const style = `font-size:${FontConstants.FontSize24Px};font-family:${FontConstants.FontFamilyMonospace}`;
        const html = `<span style="${style}">${value}</span>`;
        super.setLabel(html);
    }

}

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
        this.resetIcon();
        this.resetLabel();
    }

    copy(target: BoardTile) {
        const label = this.getLabel();
        if (label)
            target.setLabel(label);
        const icon = this.getIcon();
        if (icon)
            target.setIcon(icon);
        this.clear();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    resetMaxWidthAndHeight() {
        const bounds = this.getBounds();
        console.log('resetMaxWidthAndHeight', bounds);
    }

    setImage(fname: string) {
        if (fname.indexOf('.') < 0)
            fname += '.png';
        const path = `resource/images/${fname}`;
        super.setIcon(path);
    }

    setLabel(value: string) {
        const style = `font-size:${FontConstants.FontSize24Px};font-family:${FontConstants.FontFamilyMonospace}`;
        const html = `<span style="${style}">${value}</span>`;
        super.setLabel(html);
    }

}

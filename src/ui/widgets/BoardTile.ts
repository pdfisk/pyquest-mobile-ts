import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { SizeConstants } from "../../constants/SizeConstants";
import { QxBasicLabel } from '../../qx/ui/basic/QxBasicLabel';
import { CenteredPanel } from "./CenteredPanel";

export class BoardTile extends CenteredPanel {

    constructor() {
        super(new QxBasicLabel);
        this.setValue('X');
        (window as any).X = this;
    }

    centerLabel() {
        console.log('centerLabel');
        const tileBounds = this.getBounds();
        const tileWidth = tileBounds.width;
        const tileHeight = tileBounds.height;
        const labelWidth = SizeConstants.LabelSize24;
        const labelHeight = SizeConstants.LabelSize24;
        const labelLeft = (tileWidth - labelWidth) / 2;
        const labelTop = (tileHeight - labelHeight) / 2;
        this.child.setLeft(labelLeft);
        this.child.setTop(labelTop);
    }

    getValue(): string {
        return (this.child as QxBasicLabel).getValue();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    onAppear() {
        super.onAppear();
        this.child.setFontFamily(FontConstants.FontFamilyMonospace);
        this.child.setFontSize(FontConstants.FontSize24Px);
        this.setSize(SizeConstants.LabelSize24, SizeConstants.LabelSize24);
        this.centerLabel();
    }

    onResize() {
        this.centerLabel();
    }

    setValue(value: string) {
        (this.child as QxBasicLabel).setValue(value);
    }

}

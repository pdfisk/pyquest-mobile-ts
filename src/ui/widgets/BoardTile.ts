import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { SizeConstants } from "../../constants/SizeConstants";
import { QxBasicLabel } from '../../qx/ui/basic/QxBasicLabel';
import { BasicPanel } from "./BasicPanel";

export class BoardTile extends BasicPanel {
    label: QxBasicLabel;

    constructor() {
        super();
        this.label = new QxBasicLabel;
        this.add(this.label);
        this.setValue('X');
    }

    centerLabel() {
        const tileBounds = this.getBounds();
        const tileWidth = tileBounds.width;
        const tileHeight = tileBounds.height;
        const labelWidth = SizeConstants.LabelSize24;
        const labelHeight = SizeConstants.LabelSize24;
        const labelLeft = (tileWidth - labelWidth) / 2;
        const labelTop = (tileHeight - labelHeight) / 2;
        this.label.setLeft(labelLeft);
        this.label.setTop(labelTop);
    }

    getValue(): string {
        return this.label.getValue();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    onAppear() {
        super.onAppear();
        this.label.setFontFamily(FontConstants.FontFamilyMonospace);
        this.label.setFontSize(FontConstants.FontSize24Px);
        this.label.setWidth(24);
        this.label.setHeight(24);
        this.centerLabel();
    }

    onResize() {
        this.centerLabel();
    }

    setValue(value: string) {
        this.label.setValue(value);
    }

}

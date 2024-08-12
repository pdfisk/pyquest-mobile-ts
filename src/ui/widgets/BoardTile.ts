import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { SizeConstants } from "../../constants/SizeConstants";
import { QxBasicLabel } from '../../qx/ui/basic/QxBasicLabel';
import { QxWidget } from '../../qx/ui/core/QxWidget';
import { CenteredPanel } from "./CenteredPanel";

export class BoardTile extends CenteredPanel {
    child: QxWidget;

    constructor() {
        super();
        this.child = new QxBasicLabel;
        this.add(this.child);
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
        this.child.setWidth(24);
        this.child.setHeight(24);
        this.centerLabel();
    }

    onResize() {
        this.centerLabel();
    }

    setValue(value: string) {
        (this.child as QxBasicLabel).setValue(value);
    }

}

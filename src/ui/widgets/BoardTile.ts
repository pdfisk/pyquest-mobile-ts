import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { SizeConstants } from "../../constants/SizeConstants";
import { QxBasicLabel } from '../../qx/ui/basic/QxBasicLabel';
import { CenteredPanel } from "./CenteredPanel";

export class BoardTile extends CenteredPanel {

    constructor() {
        super(new QxBasicLabel);
        this.setValue('X');
    }

    getValue(): string {
        return (this.child as QxBasicLabel).getValue();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

    onAppear() {
        this.child.setFontFamily(FontConstants.FontFamilyMonospace);
        this.child.setFontSize(FontConstants.FontSize24Px);
        this.setSize(SizeConstants.LabelSize24, SizeConstants.LabelSize24);
        super.onAppear();
    }

    setValue(value: string) {
        (this.child as QxBasicLabel).setValue(value);
    }

}

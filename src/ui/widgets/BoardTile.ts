import { ColorConstants } from "../../constants/ColorConstants";
import { FontConstants } from "../../constants/FontConstants";
import { QxBasicLabel } from '../../qx/ui/basic/QxBasicLabel';
import { CenteredPanel } from '../widgets/CenteredPanel';

export class BoardTile extends CenteredPanel {
    label: QxBasicLabel;

    constructor() {
        super();
        this.label = new QxBasicLabel;
        this.label.setFontFamily(FontConstants.FontFamilyMonospace);
        this.label.setFontSize(FontConstants.FontSize24Px);
        this.setChild(this.label);
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor(ColorConstants.BoardTileBackground);
    }

}

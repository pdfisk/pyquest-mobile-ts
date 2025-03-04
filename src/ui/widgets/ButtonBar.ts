import { ColorConstants, SizeConstants } from "../../constants";
import { MessageConstants } from "../../constants/MessageConstants";
import { QxHBox } from "../../qx/ui/mobile/container/QxHBox";
import { QxButton } from "../../qx/ui/mobile/form/QxButton";
import { HtmlStrUtil } from '../../util/HtmlStrUtil';

export class ButtonBar extends QxHBox {
    buttonsMap: Map<string, QxButton> = new Map;

    constructor () {
        super();
        this.setHeightPx( SizeConstants.ButtonBarHeight );
    }

    addButton ( label: string, fn?: Function ) {
        const button: QxButton = new QxButton( label, fn );
        button.setHeightPx( SizeConstants.ButtonBarButtonHeight );
        this.add( button );
        this.buttonsMap.set( HtmlStrUtil.asTag( label ), button );
    }

    getButtonFromLabel ( label: string ): QxButton | null {
        return this.getButtonFromTag( HtmlStrUtil.asTag( label ) );
    }

    getButtonFromTag ( tag: string ): QxButton | null {
        const button: any = this.buttonsMap.get( tag );
        if ( button instanceof QxButton )
            return button;
        return null;
    }

    getButtonLabel ( firstLabel: string ) {
        const button = this.getButtonFromLabel( firstLabel );
        if ( button )
            return button.getLabel();
        return MessageConstants.NotFound;
    }

    setButtonLabel ( firstLabel: string, newLabel: string ) {
        const button = this.getButtonFromLabel( firstLabel );
        if ( button )
            button.setLabel( newLabel );
    }

    initialize () {
        super.initialize();
        this.setBackgroundColor( ColorConstants.ButtonBarBackground );
        this.setPaddingBottomPx( SizeConstants.ButtonBarPaddingBottom );
        this.setPaddingLeftPx( SizeConstants.ButtonBarPaddingLeft );
        this.setPaddingRightPx( SizeConstants.ButtonBarPaddingRight );
        this.setPaddingTopPx( SizeConstants.ButtonBarPaddingTop );
    }

}

import { StyleConstants } from '../../../../constants/StyleConstants';
import { QxFactory } from '../../../factory/QxFactory';
import { QxButton } from "../form/QxButton";

export class QxNavigationBarButton extends QxButton {

    protected constructor(label: string, fn: Function | null = null, widget: any = null) {
        super(label, fn, widget ? widget : QxFactory.mobileNavigationBarButton());
        if (!widget)
            this.addCssClass(StyleConstants.CssNavbarButton);
    }

}

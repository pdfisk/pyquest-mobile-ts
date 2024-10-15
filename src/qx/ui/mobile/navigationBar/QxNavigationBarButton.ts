import { EventConstants, StyleConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxButton } from "../form/QxButton";

export class QxNavigationBarButton extends QxButton {

    constructor(label: string, fn: Function | null = null) {
        super(QxFactory.mobileNavigationBarButton());
        this.setLabel(label);
        this.addCssClass(StyleConstants.CssNavbarButton);   
        if (fn)
            this.addListener(EventConstants.QxEventTap, fn);
    }

}

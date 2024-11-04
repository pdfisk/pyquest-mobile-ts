import { EventConstants, StyleConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxButton } from "../form/QxButton";

export class QxNavigationBarButton extends QxButton {

    protected constructor(label: string, fn: Function | null = null, widget: any = null) {
        super(label, fn, widget ? widget : QxFactory.mobileNavigationBarButton());
        if (!widget)
            this.addCssClass(StyleConstants.CssNavbarButton);
    }

}

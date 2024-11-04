import { EventConstants } from "../../../../constants";
import { QxFactory } from "../../../factory";
import { QxAtom } from "../basic/QxAtom";

export class QxButton extends QxAtom {

    constructor(label: string = '', fn: Function | null = null, widget:any=null) {
        super(widget ? widget: QxFactory.mobileButton(label));
        if (widget)
            this.setLabel(label);
        if (fn)
            this.addListener(EventConstants.QxEventTap, fn);
    }

}

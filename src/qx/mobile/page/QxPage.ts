import { EventConstants } from "../../../constants";
import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export class QxPage extends QxObject {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobilePage());
        this.widget.addListenerOnce(EventConstants.QxEventAppear, this.onAppear, this);
    }

    onAppear() {
    }

}

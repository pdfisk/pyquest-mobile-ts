import { EventConstants } from "../../../constants";
import { QxFactory } from "../../factory";
import { QxComposite } from "../container/QxComposite";

export class QxPage extends QxComposite {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobilePage());
        this.widget.addListenerOnce(EventConstants.QxEventAppear, this.onAppear, this);
    }

    onAppear() {
    }

}

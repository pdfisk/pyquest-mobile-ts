import { QxFactory } from "../../factory/QxFactory";
import { QxWidget } from "../core/QxWidget";

export class QxBasicAtom extends QxWidget {

    constructor(widget: any) {
        widget = widget ? widget : QxFactory.basicAtom();
        super(widget);
    }

}

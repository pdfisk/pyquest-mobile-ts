import { QxFactory } from "../../factory";
import { QxWidget } from "../core/QxWidget";

export class QxAtom extends QxWidget {

    constructor(widget: any) {
        super(widget ? widget : QxFactory.mobileAtom());
    }

    setLabel(label: string) {
        this.widget.setLabel(label);
    }

}
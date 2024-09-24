import { QxFactory } from "../../factory";
import { QxAtom } from "../basic/QxAtom";

export class QxButton extends QxAtom {

    constructor(label: string, fn?: Function) {
        super(QxFactory.mobileButton(label));
        if (fn)
            this.widget.addListener('tap', fn);
    }

}

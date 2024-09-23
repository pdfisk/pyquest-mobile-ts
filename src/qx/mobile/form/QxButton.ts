import { QxFactory } from "../../factory";
import { QxAtom } from "../basic/QxAtom";

export class QxButton extends QxAtom {

    constructor(label: string) {
        super(QxFactory.mobileButton());
        this.setLabel(label);
    }

}

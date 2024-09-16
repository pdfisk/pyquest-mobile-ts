import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export class QxMobileWidget extends QxObject {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobilePageManager());
    }

    setStyle(key: string, value: any) {
        if (this.widget._setStyle) {
            this.widget._setStyle(key, value);
        }
    }

}

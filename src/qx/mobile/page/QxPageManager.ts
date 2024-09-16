import { QxObject } from "../../core";
import { QxFactory } from "../../factory";

export  class QxPageManager extends QxObject {
 
    constructor() {
        super(QxFactory.mobilePageManager());
    }

}

import { QxFactory } from "../../../../factory/QxFactory";
import { QxAbstractRenderer } from "./QxAbstractRenderer";

export class QxSingle extends QxAbstractRenderer {

    constructor(widget?: any) {
        super(widget ? widget : QxFactory.mobileSingle());
    }

}

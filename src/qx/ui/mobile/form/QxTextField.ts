import { QxFactory } from "../../../factory";
import { QxInput } from "./QxInput";

export class QxTextField extends QxInput {

    constructor() {
        super(QxFactory.mobileTextField());
    }

}

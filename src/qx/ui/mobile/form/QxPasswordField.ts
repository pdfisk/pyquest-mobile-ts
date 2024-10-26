import { QxFactory } from "../../../factory";
import { QxInput } from "./QxInput";

export class QxPasswordField extends QxInput {

    constructor() {
        super(QxFactory.mobilePassowrdField());
    }

}

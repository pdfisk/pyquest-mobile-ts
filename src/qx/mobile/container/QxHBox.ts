import { QxHBoxLayout } from "../layout/QxHBoxLayout";
import { QxComposite } from "./QxComposite";

export  class QxHBox extends QxComposite {
 
    constructor() {
        super();
        this.setLayout(new QxHBoxLayout)
    }

}

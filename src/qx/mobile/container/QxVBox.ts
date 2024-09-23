import { QxVBoxLayout } from "../layout/QxVBox.Layout";
import { QxComposite } from "./QxComposite";

export  class QxVBox extends QxComposite {
 
    constructor() {
        super();
        this.setLayout(new QxVBoxLayout)
    }

}

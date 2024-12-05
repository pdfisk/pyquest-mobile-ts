import { QxCardLayout } from "../layout/QxCardLayout";
import { QxComposite } from "./QxComposite";

export  class QxCard extends QxComposite {
 
    constructor() {
        super();
        this.setLayout(new QxCardLayout);
    }

}

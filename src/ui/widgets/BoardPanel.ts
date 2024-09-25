import { QxVBox } from "../../qx/mobile/container/QxVBox";

export class BoardPanel extends QxVBox {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor('red');
    }

}

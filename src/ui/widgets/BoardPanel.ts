import { QxVBox } from "../../qx/mobile/container/QxVBox";

export class BoardPanel extends QxVBox {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBorderPx('red', 5);
        this.setPaddingBottomPx(25);
        console.log('board panel');
    }

}

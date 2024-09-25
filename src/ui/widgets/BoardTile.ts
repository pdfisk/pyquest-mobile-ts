import { QxComposite } from "../../qx/mobile/container/QxComposite";

export class BoardTile extends QxComposite {

    constructor() {
        super();
    }

    initialize() {
        super.initialize();
        this.setBackgroundColor('orange');
    }

}

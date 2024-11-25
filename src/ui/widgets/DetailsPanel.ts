import { QxComposite } from "../../qx/ui/mobile/container/QxComposite";

export class DetailsPanel extends QxComposite {

    constructor() {
        super();
        this.setBackgroundColor('red');
        this.setBorderPx('blue', 3, 10);
    }

}

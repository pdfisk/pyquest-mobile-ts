import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
    }

    initialize() {
        for (let i = 0;i< 25;i++)
            this.add(new InfoScrollItem);
    }

}

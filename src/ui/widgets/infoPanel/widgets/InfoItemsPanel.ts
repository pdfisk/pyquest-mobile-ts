import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        for (let i = 0; i < 10; i++)
            this.add(new InfoScrollItem);
    }

}

import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { BrowserUtil } from "../../../../util/BrowserUtil";
import { InfoScrollFiller } from "./InfoScrollFiller";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        const fn = (itemsData: string[][]) => {
            for (let i = 0; i < itemsData.length; i++)
                this.add(new InfoScrollItem(itemsData[i]));
            this.addFlex(new InfoScrollFiller);
        };
        BrowserUtil.readInfoIndex(fn);
    }

}

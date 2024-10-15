import { InfoData } from "../../../../data/static/InfoData";
import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { InfoScrollFiller } from "./InfoScrollFiller";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
        (window as any).X = this;
    }

    getItemData(fn: Function) {
        fn(InfoData.allInfoData);
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
        this.getItemData(fn);
    }

}

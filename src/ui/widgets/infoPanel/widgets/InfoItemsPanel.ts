import { InfoData } from "../../../../data/static/InfoData";
import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { InfoScrollFiller } from "./InfoScrollFiller";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
        (window as any).X = this;
    }

    getItemData(): string[][] {
        return InfoData.allInfoData;
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        const itemsData: string[][] = this.getItemData();
        for (let i = 0; i < itemsData.length; i++)
            this.add(new InfoScrollItem(itemsData[i]));
        this.addFlex(new InfoScrollFiller);
    }

}

import { QxVBox } from "../../../../qx/ui/mobile/container/QxVBox";
import { InfoScrollItem } from "./InfoScrollItem";

export class InfoItemsPanel extends QxVBox {

    constructor() {
        super();
    }

    getItemData():string[][] {
        const items:string[][] = [];
        for (let i=0;i<100;i++) {
            const item:string[] = [];
            item.push( `Item ${i}`);
            for(let j=0;j<7;j++)
                item.push(`Paragraph ${j}`);
            items.push(item);
        }
        return items;
    }

    handlesOnAppear(): boolean {
        return true;
    }

    onAppear() {
        const itemsData:string[][]= this.getItemData();
        for(let i = 0;i<itemsData.length;i++)
            this.add(new InfoScrollItem(itemsData[i]));
    }

}

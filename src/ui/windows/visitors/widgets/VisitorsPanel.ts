import { VisitorsStore } from '../../../../data/stores/VisitorsStore';
import { StringUtil } from '../../../../util/StringUtil';
import { DataListPanel } from '../../../widgets/DataListPanel';
import { VisitorsWindow } from '../VisitorsWindow';

export class VisitorsPanel extends DataListPanel {
    visitorsWindow: VisitorsWindow;

    constructor(visitorsWindow: VisitorsWindow) {
        super();
        this.visitorsWindow = visitorsWindow;
    }

    getListKey(item: any): string {
        const ip_address = item.ip_address;
        const id: string = StringUtil.padZero(item.id, 3);
        return `${ip_address}-${id}`;
    }

    setStore() {
        this.dataStore = VisitorsStore.getInstance();
    }

    updateList() {
        const ip_addresses: string[] = [];
        (this.dataMap as any).forEach((item: any) => {
            ip_addresses.push(this.getListKey(item));
        });
        ip_addresses.sort();
        this.list.widget.initSelection();
        this.list.setData(ip_addresses);
    }

    updateMapData(data: any[]) {
        this.dataMap.clear();
        const ip_addresses: string[] = [];
        for (let i = 0; i < data.length; i++) {
            const item: any = data[i];
            const listKey: string = this.getListKey(item);
            ip_addresses.push(listKey);
            this.dataMap.set(listKey, item);
        }
        this.updateList();
    }


}

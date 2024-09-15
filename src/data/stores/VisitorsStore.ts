import { ServerConstants } from "../../constants/ServerConstants";
import { AbstractStore } from "./AbstractStore";

export class VisitorsStore extends AbstractStore {

    static instance: VisitorsStore;

    static getInstance() {
        if (!this.instance)
            this.instance = new VisitorsStore();
        return this.instance;
    }

    private constructor() {
        super();
    }

    createNewRecord(): any {
        return { ip_address: '0.0.0.0' };
    }

    getDataRecords(): any[] {
        const model = this.dataStore.$$user_model;
        const visitorsData: any[] = [];
        for (let i = 0; i < model.length; i++) {
            const item = model.getItem(i);
            const id = item.$$user_id;
            const ip_address = item.$$user_ip_address;
            const visitorRecord: any = {};
            visitorRecord.id = id;
            visitorRecord.ip_address = ip_address;
            visitorsData.push(visitorRecord);
        }
        return visitorsData;
    }

    getVisitorsItem(n: number) {
        return this.dataStore.$$user_model.getItem(n);
    }

    getVisitorsSize(): number {
        return this.dataStore.$$user_model.length;
    }

    handleLoadedData() {
        super.handleLoadedData();
    }

    serviceName(): string {
        return ServerConstants.ServiceLog;
    }

}

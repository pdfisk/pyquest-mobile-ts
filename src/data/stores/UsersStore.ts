import { ServerConstants } from "../../constants/ServerConstants";
import { AbstractStore } from "./AbstractStore";

export class UsersStore extends AbstractStore {

    static instance: UsersStore;

    static getInstance() {
        if (!this.instance)
            this.instance = new UsersStore();
        return this.instance;
    }

    private constructor() {
        super();
    }

    createNewRecord(name:string): any {
        return { name: name, passwd: '', level: '1' };
    }

    createRecordData(record:any): any {
        return record;
    }

    getDataRecords(): any[] {
        const model = this.dataStore.$$user_model;
        const usersData: any[] = [];
        for (let i = 0; i < model.length; i++) {
            const item = model.getItem(i);
            const id = item.$$user_id;
            const name = item.$$user_name;
            const passwd = item.$$user_passwd;
            const created_at = item.$$user_created_at;
            const updated_at = item.$$user_updated_at;
            const userRecord: any = {};
            userRecord.id = id;
            userRecord.name = name;
            userRecord.passwd = passwd;
            userRecord.created_at = created_at;
            userRecord.updated_at = updated_at;
            usersData.push(userRecord);
        }
        return usersData;
    }

    getUsersItem(n: number) {
        return this.dataStore.$$user_model.getItem(n);
    }

    getUsersSize(): number {
        return this.dataStore.$$user_model.length;
    }

    handleLoadedData() {
        super.handleLoadedData();
    }

    serviceName(): string {
        return ServerConstants.ServiceUsers;
    }

}

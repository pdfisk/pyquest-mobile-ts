import { UsersStore } from '../../../../data/stores/UsersStore';
import { DataListPanel } from '../../../widgets/DataListPanel';
import { UsersWindow } from '../UsersWindow';

export class UsersPanel extends DataListPanel {
    usersWindow: UsersWindow;

    constructor(usersWindow: UsersWindow) {
        super();
        this.usersWindow = usersWindow;
    }

    deleteUser() {
        this.dataStore?.deleteRecord(this.selectedData);
    }

    newUser() {
        this.dataStore?.newRecord();
    }

    saveUser() {
        this.dataStore?.saveRecord(this.selectedData);
    }

    setStore() {
        this.dataStore = UsersStore.getInstance();
    }

    updateName(name: string) {
        if (this.selectedData)
            this.selectedData.name = name;
    }

    updatePassword(text: string) {
        if (this.selectedData)
            this.selectedData.password = text;
    }

}

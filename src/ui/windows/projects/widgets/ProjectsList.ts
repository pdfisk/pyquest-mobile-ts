import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsList extends DataListPanel {

    addHandlerFns(): void {
        const updateListFn: Function = (data: any[]) => {
            this.updateList(data);
        }
        this.addHandlerFn(updateListFn);
    }

    initialize() {
        super.initialize();
    }

    refresh() {
        this.dataStore?.loadData();
    }

    setStore() {
        this.dataStore = ProjectsStore.getInstance();
    }

    updateList(data: any[]) {
        console.log('updateList', data);
    }

}

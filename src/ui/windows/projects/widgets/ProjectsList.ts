import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsList extends DataListPanel {
    dataMap: Map<string, any> = new Map();

    addHandlerFns(): void {
        const updateListFn: Function = (data: any[]) => {
            this.updateListData(data);
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

    updateListData(data: any[]) {
        this.dataMap.clear();
        const names: string[] = [];
        for (let i = 0; i < data.length; i++) {
            const item: any = data[i];
            const name: string = item.name;
            names.push(name);
            this.dataMap.set(name, item);
        }
        this.updateList(names);
    }

}

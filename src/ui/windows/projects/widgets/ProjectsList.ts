import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsList extends DataListPanel {
    changeHandler?: Function;
    dataMap: Map<string, any> = new Map();

    addChangeHandlerFns(): void {
        const changeSelectionFn: Function = (name: any) => {
            this.onChangeSelection(name);
        }
        this.addChangeHandlerFn(changeSelectionFn);
    }

    addLoadHandlerFns(): void {
        const updateListFn: Function = (data: any[]) => {
            this.updateListData(data);
        }
        this.addLoadHandlerFn(updateListFn);
    }

    getSelectionValue(name: string): any {
        if (this.dataMap.has(name))
            return this.dataMap.get(name);
        return null;
    }

    initialize() {
        super.initialize();
    }

    onChangeSelection(name: string) {
        console.log('ProjectsList onChangeSelection', name, this.changeHandler);
        if (this.changeHandler)
            this.changeHandler(this.getSelectionValue(name));
    }

    refresh() {
        this.dataStore?.loadData();
    }

    setChangeHandler(changeHandler: Function) {
        this.changeHandler = changeHandler;
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

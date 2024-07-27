import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';
import { Server } from './../../../../data/Server';

export class ProjectsPanel extends DataListPanel {

    deleteProject() {
        if (!this.selectedData)
            return;
        Server.deleteProject(this.selectedData);
    }

    newProject() {
        Server.newProject();
    }

    saveProject() {
        if (!this.selectedData)
            return;
        Server.saveProject(this.selectedData);
    }

    setStore() {
        this.dataStore = ProjectsStore.getInstance();
    }

}

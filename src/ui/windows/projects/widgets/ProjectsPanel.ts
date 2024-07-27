import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsPanel extends DataListPanel {

    deleteProject() {
        console.log('deleteProject');
    }

    newProject() {
        console.log('newProject');
    }

     saveProject() {
        console.log('saveProject');
    }

    setStore() {
        this.dataStore = ProjectsStore.getInstance();
    }

}

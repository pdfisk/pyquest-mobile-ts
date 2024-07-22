import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsList extends DataListPanel {

    setStore() {
        this.dataStore = ProjectsStore.getInstance();
    }

}

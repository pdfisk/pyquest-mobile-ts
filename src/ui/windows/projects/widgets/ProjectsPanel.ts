import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';

export class ProjectsPanel extends DataListPanel {

    deleteProject() {
        this.dataStore?.deleteRecord(this.selectedData);
    }

    newProject() {
        this.dataStore?.newRecord();
    }

    saveProject() {
        this.dataStore?.saveRecord(this.selectedData);
    }

    setStore() {
        this.dataStore = ProjectsStore.getInstance();
    }

    updateCode(code: string) {
        if (this.selectedData)
            this.selectedData.code = code;
    }

    updateDescription(text: string) {
        if (this.selectedData)
            this.selectedData.description = text;
    }

    updateDetails(text: string) {
        if (this.selectedData)
            this.selectedData.details = text;
    }

}

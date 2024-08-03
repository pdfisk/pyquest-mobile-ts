import { ProjectsStore } from '../../../../data/stores/ProjectsStore';
import { DataListPanel } from '../../../widgets/DataListPanel';
import { ProjectsWindow } from '../ProjectsWindow';

export class ProjectsPanel extends DataListPanel {
    projectsWindow: ProjectsWindow;

    constructor(projectsWindow: ProjectsWindow) {
        super();
        this.projectsWindow = projectsWindow;
    }

    addLoadHandlerFns(): void {
        super.addLoadHandlerFns();
        const updateCategoriesFn: Function = (dataRecords: any[]) => {
            const data: string[] = this.generateCategories(dataRecords);
            this.updateCategories(data);
        }
        this.addLoadHandlerFn(updateCategoriesFn);
    }

    deleteProject() {
        this.dataStore?.deleteRecord(this.selectedData);
    }

    generateCategories(dataRecords: any[]): string[] {
        const categories: string[] = [];
        for (let i = 0; i < dataRecords.length; i++) {
            const record: any = dataRecords.at(i);
            if (typeof (record.details) === 'string') {
                const data: any = JSON.parse(record.details);
                if (typeof (data.category) === 'string') {
                    const category: string = data.category;
                    if (!categories.includes(category))
                        categories.push(category);
                }
            }
        }
        categories.sort();
        return categories;
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

    updateCategories(categories: string[]) {
        this.projectsWindow.updateCategories(categories);
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

import { ButtonBar } from '../../../widgets/ButtonBar';

export class ProjectsButtonBar extends ButtonBar {

    defaultHasSelectBox(): boolean {
        return true;
    }

    updateCategories(categories: string[]) {
        console.log('ProjectsButtonBar', categories);
    }

}

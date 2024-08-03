import { ButtonBar } from '../../../widgets/ButtonBar';

export class ProjectsButtonBar extends ButtonBar {

    defaultHasSelectBox(): boolean {
        return true;
    }

    updateCategories(categories: string[]) {
        categories.unshift('--- all ---');
        this.selectBox?.setItems(categories);
    }

}

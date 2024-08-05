import { LabelConstants } from '../../../../constants/LabelConstants';
import { QxSelectBox } from '../../../../qx/ui/form/QxSelectBox';
import { ButtonBar } from '../../../widgets/ButtonBar';

export class ProjectsButtonBar extends ButtonBar {

    defaultHasSelectBox(): boolean {
        return true;
    }

    getSelectedCategory(): string {
        return (this.selectBox as QxSelectBox).getSelectedLabel()
    }

    setSelectionHandlerFn(handlerFn: Function) {
        this.selectBox?.setChangeHandlerFn(handlerFn);
    }

    updateCategories(categories: string[]) {
        categories.unshift(LabelConstants.SelectionLabelAll);
        this.selectBox?.setItems(categories);
    }

}

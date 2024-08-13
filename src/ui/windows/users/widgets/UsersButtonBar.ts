import { QxSelectBox } from '../../../../qx/ui/form/QxSelectBox';
import { ButtonBar } from '../../../widgets/ButtonBar';

export class UsersButtonBar extends ButtonBar {

    defaultHasSelectBox(): boolean {
        return true;
    }

    getSelectedCategory(): string {
        return (this.selectBox as QxSelectBox).getSelectedLabel().trim();
    }

    setSelectionHandlerFn(handlerFn: Function) {
        this.selectBox?.setChangeHandlerFn(handlerFn);
    }

}

import { QxForm } from '../../qx/ui/form/QxForm';
import { QxFormRendererSingle } from '../../qx/ui/form/QxFormRendererSingle';

export abstract class AbstractForm extends QxFormRendererSingle {
    form: QxForm;

    constructor() {
        const form = new QxForm;
        super(form);
        this.form = form;
    }

    defaultEnableOnAppear(): boolean {
        return true;
    }

    defaultEnableOnResize(): boolean {
        return true;
    }

}
